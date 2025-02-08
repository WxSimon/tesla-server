const config = require('@/config').value;
const winston = require('winston');
require("winston-daily-rotate-file");

const defaultOptions = {
    datePattern: "YYYY-MM-DD",
    maxSize: "20m",
    maxFiles: "14d",
};

const transports = [
    new winston.transports.DailyRotateFile({
        level: "info",
        filename: "logs/info/info-%DATE%.log",
        ...defaultOptions
    }),
    new winston.transports.DailyRotateFile({
        level: "error",
        filename: "logs/error/error-%DATE%.log",
        ...defaultOptions
    }),
    new winston.transports.Console({
    })
];


const logger = winston.createLogger({
    level: config.loggerLevel,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.simple(),
        winston.format.errors({ stack: true }),
        winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        winston.format.printf((info) => `${info.level}: ${[info.timestamp]} ${info.message}`)
    ),
    transports,
});

module.exports = logger;