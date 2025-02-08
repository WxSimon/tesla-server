const moment = require('moment-timezone');
// UTC-0
moment.tz.setDefault("Asia/Shanghai");

module.exports = moment;