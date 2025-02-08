const NODE_ENV = process.env.NODE_ENV;
require('dotenv').config({ path: `./.env_${NODE_ENV}` });
let envs = process.env;
let value;

const calculateValue = () => {
    value = {
        port: envs.PORT || 8080,
        listenInaddrAny: envs.LISTEN_INADDR_ANY || 1,
        db: {
            force: envs.DB_FORCE,
            dialect: envs.DB_DIALECT || 'postgres',
            host: envs.DB_HOST || '',
            port: parseInt(envs.DB_PORT) || 5555,
            username: envs.DB_USERNAME || '',
            password: envs.DB_PASSWORD || '',
            database: envs.DB_DATABASE || '',
        },
        ratelimit: {
            max: parseInt(envs.RATE_LIMIT_MAX) || 1000,
            duration: parseInt(envs.RATE_LIMIT_DURATION) || 30 * 60 * 1000
        },
        amap: {
            key: envs.AMAP_KEY || ''
        },
        loggerLevel: envs.LOGGER_LEVEL ? envs.LOGGER_LEVEL : envs.NODE_ENV === 'prod' ? 'info' : 'debug',
        allowOrigin: envs.ALLOW_ORIGIN || '*',
        blacklist: envs.BLACKLIST && envs.BLACKLIST.split(','),
        whitelist: envs.WHITELIST && envs.WHITELIST.split(','),
        allowLocalhost: envs.ALLOW_LOCALHOST,
        router_print: Boolean(envs.ROUTER_PRINT) || true
    };
};

calculateValue();

module.exports = {
    set: (env) => {
        envs = Object.assign(process.env, env);
        calculateValue();
    },
    get value() {
        return value;
    },
};
