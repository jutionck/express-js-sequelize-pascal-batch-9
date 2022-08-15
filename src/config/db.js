const { Sequelize } = require('sequelize');
const Config = require('./config');
const DbConn = () => {
    const { dbHost, dbPort, dbUser, dbPassword, dbName, dbDriver } = Config();
    const dsn = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
    return new Sequelize(dsn);
}
module.exports = DbConn
