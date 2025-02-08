const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define(`Location`, {
    longitude: {
        type: DataTypes.DECIMAL(32, 18),
    },
    latitude: {
        type: DataTypes.DECIMAL(32, 18),
    },
    formatted_address: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    province: {
        type: DataTypes.STRING,
    },
    district: {
        type: DataTypes.STRING,
    },
    township: {
        type: DataTypes.STRING,
    },
    addr: {
        type: DataTypes.STRING,
    },
    adcode: {
        type: DataTypes.BIGINT(11),
    }
}, {
    timestamps: false,
    tableName: 'location'
});