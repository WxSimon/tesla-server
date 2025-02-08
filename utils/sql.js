const driveSql = `SELECT
'charge' AS type,
cp.id AS id,
start_date AT TIME ZONE 'UTC' start_time,
end_date AT TIME ZONE 'UTC' end_time,
duration_min AS duration,
charge_energy_used AS charge,
COST,
start_battery_level AS charge_start_power,
end_battery_level AS charge_end_power,
start_rated_range_km AS charge_start_distance,
end_rated_range_km AS charge_end_distance,
p.longitude AS lng,
p.latitude AS lat,
g.name AS location_tag,
l.addr AS location,
NULL AS d_distance,
NULL AS d_car_distance,
NULL AS d_energy,
NULL AS d_fkm,
NULL AS d_tkm,
NULL AS d_from_addr,
NULL AS d_to_addr,
NULL AS d_from_lng,
NULL AS d_from_lat,
NULL AS d_from_tag,
NULL AS d_to_lng,
NULL AS d_to_lat,
NULL AS d_to_tag
FROM
charging_processes AS cp
LEFT JOIN positions p ON p.id = cp.position_id
LEFT JOIN geofences g ON g.id = cp.geofence_id
LEFT JOIN location l ON l.longitude = p.longitude
    AND l.latitude = p.latitude
WHERE
charge_energy_added > 0
AND charge_energy_used > 0
UNION ALL
SELECT
'drive' AS type,
d.id AS id,
d.start_date AS start_time,
d.end_date AS end_time,
d.duration_min AS duration,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
round(d.distance::numeric, 2) AS d_distance,
d.start_ideal_range_km - d.end_ideal_range_km AS d_car_distance,
round((d.start_ideal_range_km - d.end_ideal_range_km) * c.efficiency::numeric, 2) AS d_energy,
d.start_ideal_range_km AS d_fkm,
d.end_ideal_range_km AS d_tkm,
lf.addr AS d_from_addr,
lt.addr AS d_to_addr,
pf.longitude AS d_from_lng,
pf.latitude AS d_from_lat,
gf.name AS d_from_tag,
pt.longitude AS d_to_lng,
pt.latitude AS d_to_lat,
gt.name AS d_to_tag
FROM
drives AS d
LEFT JOIN positions pf ON pf.id = d.start_position_id
LEFT JOIN geofences gf ON gf.id = d.start_geofence_id
LEFT JOIN positions pt ON pt.id = d.end_position_id
LEFT JOIN geofences gt ON gt.id = d.end_geofence_id
LEFT JOIN location lf ON lf.longitude = pf.longitude
    AND lf.latitude = pf.latitude
LEFT JOIN location lt ON lt.longitude = pt.longitude
    AND lt.latitude = pt.latitude
LEFT JOIN cars c ON c.id = d.car_id
WHERE
distance > 0.5
ORDER BY
start_time DESC OFFSET ? LIMIT ?;`;

const statSql = `WITH Car AS (
	SELECT
		name AS car_name
	FROM
		cars
),
State AS (
	SELECT
rated_battery_range_km as less_distance,
usable_battery_level as electric
	FROM
		drives as d
		LEFT JOIN positions p on p.id = d.end_position_id
	where d.end_date is not null
	ORDER BY
		end_date DESC
	LIMIT 1
),
COST AS (
	SELECT
		sum(
			COST) AS
		COST,
		sum(charge_energy_used) AS energy
FROM
	charging_processes
),
distance AS (
	SELECT
		round(((max(odometer)))::numeric, 2) AS distance
	FROM
		positions
),
price AS (
	SELECT
		round((
			SELECT
				sum(
					COST)
			FROM charging_processes) / (
			SELECT
				max(odometer) - min(odometer)
			FROM positions)::numeric, 2) AS price
)
SELECT
	*
FROM
	COST,
	distance,
	price,
	Car,
	State;`;

const priceSql = `SELECT
round((
 SELECT
  sum(
   COST)
 FROM charging_processes) / (
 SELECT
  max(odometer) - min(odometer)
 FROM positions)::numeric, 2) AS price`;

const calendarSql = `WITH drive AS (
	SELECT
		to_char(start_date AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Shanghai', 'YYYY-MM-DD') AS date,
		round(sum(distance)::numeric, 2) AS distance
	FROM
		drives
	GROUP BY
		date
	ORDER BY
		date DESC
),
charge AS (
	SELECT
		to_char(start_date AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Shanghai', 'YYYY-MM-DD') AS date,
		sum(charge_energy_used) AS charge_energy_used
	FROM
		charging_processes
	GROUP BY
		date
	ORDER BY
		date DESC
)
SELECT
	drive.*,charge.charge_energy_used
FROM
	drive left join charge on drive.date = charge.date;`;

const drivePorcessSql = `select latitude,longitude from positions where drive_id = ? order by date;`;

const driveDetailsSql = `SELECT
'drive' AS type,
d.id AS id,
d.start_date AS start_time,
d.end_date AS end_time,
d.duration_min AS duration,
round(d.distance::numeric, 2) AS d_distance,
d.start_ideal_range_km - d.end_ideal_range_km AS d_car_distance,
round((d.start_ideal_range_km - d.end_ideal_range_km) * c.efficiency::numeric, 2) AS d_energy,
d.start_ideal_range_km AS d_fkm,
d.end_ideal_range_km AS d_tkm,
lf.addr AS d_from_addr,
lt.addr AS d_to_addr,
pf.longitude AS d_from_lng,
pf.latitude AS d_from_lat,
gf.name AS d_from_tag,
pt.longitude AS d_to_lng,
pt.latitude AS d_to_lat,
gt.name AS d_to_tag
FROM
drives AS d
LEFT JOIN positions pf ON pf.id = d.start_position_id
LEFT JOIN geofences gf ON gf.id = d.start_geofence_id
LEFT JOIN positions pt ON pt.id = d.end_position_id
LEFT JOIN geofences gt ON gt.id = d.end_geofence_id
LEFT JOIN location lf ON lf.longitude = pf.longitude
    AND lf.latitude = pf.latitude
LEFT JOIN location lt ON lt.longitude = pt.longitude
    AND lt.latitude = pt.latitude
LEFT JOIN cars c ON c.id = d.car_id
WHERE
d.distance > 0.5 AND d.id = ?`;


module.exports = {
	driveSql,
	statSql,
	priceSql,
	calendarSql,
	drivePorcessSql,
	driveDetailsSql
};