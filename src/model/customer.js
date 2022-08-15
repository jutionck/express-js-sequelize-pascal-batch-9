const { DataTypes } = require("sequelize");
const DbConn = require('../config/db');
const MST_CUSTOMER = 'mst_customer';
module.exports = () => {
    return DbConn().define(MST_CUSTOMER, {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        balance: DataTypes.INTEGER,
        isStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true,
        underscored: true,
        paranoid: true
    });
}
