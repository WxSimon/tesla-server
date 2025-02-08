const { Sequelize } = require('sequelize');
const logger = require('@/utils/logger');
const config = require('@/config').value;

const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password, {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    logging: null,
    timezone: '+00:00',
});

require("./Location")(sequelize);

async function initDb() {
    try {
        // 同步数据库模型，如果表不存在则创建
        await sequelize.sync();
        logger.info('Database tables synchronized successfully');
    } catch (error) {
        logger.error('Failed to sync database:', error);
        throw error;
    }
}

(async () => {
    try {
        await initDb();
        logger.info('database init success...');
    } catch (error) {
        logger.error('database init failed:', error);
    }
})();

module.exports = {
    initDb,
    Sequelize,
    sequelize
};