/* eslint-disable no-await-in-loop */
/**
 * 高德地图
 */
const axios = require('axios');
const gcoord = require('gcoord');
const config = require('@/config').value;

const { sequelize } = require('@/db');

const key = config.amap.key;
const location = async (points) => {
    if (!points || !points.length) { return; }

    let locations = [];
    if (points instanceof Array) {
        locations = points;

    } else {
        locations[0] = points;
    }

    // 坐标转换
    const newLocations = locations.map((d) => {
        const g = gcoord.transform(
            [d.longitude, d.latitude],
            gcoord.WGS84,
            gcoord.GCJ02);

        return {
            longitude: g[0],
            latitude: g[1],
        };
    });


    const res = [];
    const LocationDb = sequelize.models.Location;
    for (let i = 0; i < newLocations.length; i++) {
        const d1 = newLocations[i];
        const url1 = `https://restapi.amap.com/v3/geocode/regeo?key=${key}&location=${d1.longitude},${d1.latitude}&poitype=&radius=1000&extensions=base&batch=false&roadlevel=0`;
        const data1 = await axios.get(url1);

        const addressComponent = data1.data.regeocode.addressComponent;

        const originalLocation = locations[i];
        const result = {
            longitude: originalLocation.longitude,
            latitude: originalLocation.latitude,
            formatted_address: data1.data.regeocode.formatted_address,
            city: addressComponent.city,
            province: addressComponent.province,
            district: addressComponent.district,
            township: addressComponent.township,
            adcode: addressComponent.adcode,
            addr: data1.data.regeocode.formatted_address.replace(`${addressComponent.province}${addressComponent.city}${addressComponent.district}${addressComponent.township}`, '')
        };

        const l = await LocationDb.findOne({
            where: {
                longitude: result.longitude,
                latitude: result.latitude
            }
        });

        if (!l) {
            await LocationDb.create(result);
        }

        res.push(result);
    }

    return res;
};

module.exports = {
    locationTransition: location
};