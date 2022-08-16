const Customer = require('../model/customer');
const User = require('../model/user');
const DbMigration = async (db) => {
    const customer = Customer(db);
    const user = User(db);
    customer.hasOne(user);
    user.belongsTo(customer);
    await customer.sync();
    await user.sync();
}
module.exports = DbMigration;
