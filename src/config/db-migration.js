const Customer = require('../model/customer');
const User = require('../model/user');
const DbMigration = async (db) => {
    const customer = Customer(db);
    const user = User(db);
    customer.hasOne(user);
    user.belongsTo(customer);
    await customer.sync();
    await user.sync();

    await user.create({
        username: 'jutionck',
        password: 'passsword',
        mstCustomerId: '12f74e11-a78f-4bc2-8671-d8e0238adf85'
    });

    const users = await user.findAll({
        include: customer
    });
    console.log(JSON.stringify(users, null, 2))
}
module.exports = DbMigration;
