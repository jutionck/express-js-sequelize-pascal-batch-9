const Customer = require('../model/customer');
const DbMigration = async (db) => {
    await Customer(db).sync();
}
module.exports = DbMigration;
