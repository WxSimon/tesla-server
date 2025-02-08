/* eslint-disable no-await-in-loop */
const Router = require('@koa/router');
const router = new Router();
const { QueryTypes } = require('sequelize');
const gcoord = require('gcoord');

const { sequelize, db } = require('@/db');
const { logger, amap, moment, sql } = require('./utils');

router.get("/ping", async (ctx) => {
	const d = { t: Date.now(), s: 'ok' };
	try {
		await db.sequelize.authenticate();
		d.d = true;

	} catch (e) {
		d.d = false;
	}

	ctx.body = d;
});

function formatTime(numMinutes) {
	if (numMinutes < 60) {
		return numMinutes + "m";
	} else {
		const hours = Math.floor(numMinutes / 60);
		const minutes = numMinutes % 60;
		if (minutes === 0) {
			return hours + "h";
		} else {
			return hours + "h" + minutes + "m";
		}
	}
}

const querydriveData = async ({ start, size }) => {
	start = start || 0;
	size = size || 0;

	const data = await sequelize.query(sql.driveSql, {
		replacements: [start, size],
		type: QueryTypes.SELECT
	});

	return data;
};

let cachedStatData = null;
let lastStatUpdate = null;

const queryStatData = async () => {
	const now = Date.now();
	// Check if cache exists and is less than 24 hours old
	if (cachedStatData && lastStatUpdate && (now - lastStatUpdate) < 24 * 60 * 60 * 1000) {
		return cachedStatData;
	}

	const [data] = await sequelize.query(sql.statSql);
	cachedStatData = data[0];
	lastStatUpdate = now;
	return cachedStatData;
};

let cachedPrice = null;
let lastPriceUpdate = null;

const queryPrice = async () => {
	const now = Date.now();
	// Check if cache exists and is less than 24 hours old
	if (cachedPrice && lastPriceUpdate && (now - lastPriceUpdate) < 24 * 60 * 60 * 1000) {
		return cachedPrice;
	}

	const [data] = await sequelize.query(sql.priceSql);
	cachedPrice = data[0].price;
	lastPriceUpdate = now;
	return cachedPrice;
};

const driveData = async ({ start, size }) => {
	const params = { start: start || 0, size: size || 99 };
	let data = await querydriveData(params);

	const driveLocations = data.filter((x) => x === 'charge' && !x.location && x.lng && x.lat).map((y) => ({ longitude: y.lng, latitude: y.lat }));
	data.filter((x) => x.type === 'drive').forEach((y) => {
		if (!y.d_from_addr && y.d_from_lng && y.d_from_lat) {
			driveLocations.push({ longitude: y.d_from_lng, latitude: y.d_from_lat });
		}

		if (!y.d_to_addr && y.d_to_lng && y.d_to_lat) {
			driveLocations.push({ longitude: y.d_to_lng, latitude: y.d_to_lat });
		}
	});

	if (driveLocations.length > 0) {
		await amap.locationTransition(driveLocations);
		data = await querydriveData(params);
	}

	const price = await queryPrice();

	let map = {};
	data.forEach(item => {
		const starttime = item.start_time;
		const time = moment(starttime).format("YYYY-MM-DD");
		item.duration = formatTime(item.duration);
		item.start_time = moment(item.start_time).format("HH:mm:ss");
		item.end_time = moment(item.end_time).format("HH:mm:ss");

		let mapItem = map[time] || {}
		let drives = mapItem.drives || [];
		let distance = mapItem.distance || 0;

		if (item.type === 'charge') {
			item.add_distance = (item.charge_end_distance - item.charge_start_distance).toFixed(2);

		} else if (item.type === 'drive') {
			item.d_cost = (item.d_car_distance * price).toFixed(2);
			item.d_price = price;
			item.d_avg_energy = (item.d_energy / item.d_distance * 1000).toFixed(2);
		}

		drives.push(item);
		mapItem.time = time;
		mapItem.drives = drives;
		mapItem.distance = Number(distance) + Number(item.d_distance || 0);
		map[time] = mapItem;
	})

	return Object.values(map);
};

const queryCalendarData = async () => {
	const [data] = await sequelize.query(sql.calendarSql);
	return data;
};

const driveDetails = async (driveId) => {
	const [data] = await sequelize.query(sql.driveDetailsSql, {
		replacements: [driveId || 210],
		type: QueryTypes.SELECT
	});

	const processData = await sequelize.query(sql.drivePorcessSql, {
		replacements: [driveId || 210],
		type: QueryTypes.SELECT
	});

	data.process = processData.map((d) => {
		const g = gcoord.transform(
			[d.longitude, d.latitude],    // 经纬度坐标
			gcoord.WGS84,               // 当前坐标系
			gcoord.GCJ02);

		return {
			longitude: g[0],
			latitude: g[1],
		};
	});

	return data;
};

router.get("/data", async (ctx) => {
	const driveDatas = await driveData({ start: ctx.query.start, size: ctx.query.size });

	const statData = await queryStatData();

	const calendarData = await queryCalendarData();
	ctx.body = {
		driveDatas: driveDatas,
		statData, calendarData
	};
});

router.get("/drive", async (ctx) => {
	const data = await driveDetails(ctx.query.driveId);
	ctx.body = {
		data
	};
});

if (['dev'].indexOf(process.env.NODE_ENV) > -1) {
	router.stack.filter((r) => r.methods.length).forEach((r) => {
		logger.warn(`Method: ${r.methods.join('/')} Path: ${r.path}`);
	});
}

module.exports = router;