const { Sequelize, DataTypes} = require('sequelize');

const dsn = 'postgres://jutioncandrakirana:@localhost:5432/db_enigmart';
const sequelize = new Sequelize(dsn);

// Define model
const run = async () => {
    const Customer = sequelize.define('mst_customer', {
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
    await Customer.sync({alter: true});


    // CRUD Basic
    // const addCustomer01 = await Customer.create({
    //     name: 'Joko Anwar',
    //     address: 'Jakarta',
    //     phone: '8282829',
    //     email: 'joko.anwar@usa.com',
    //     balance: 20
    // });
    // console.log('addCustomer01:', addCustomer01)

    // Select * FROM ....
    const customer01 = await Customer.findAll();
    console.log(`SELECT * FROM...`)
    console.log(JSON.stringify(customer01, null, 2));

    console.log(`SELECT * FROM .. WHERE name`);
    const customer02 = await Customer.findAll({
        where: { name: 'Joko Anwar' },
    });
    console.log(JSON.stringify(customer02, null, 2));

    const customer03 = await Customer.findAll({
        order: [ ['createdAt', 'desc'] ]
    });
    console.log(`SELECT * FROM... ORDER DESC`)
    console.log(JSON.stringify(customer03, null, 2));

    // findOne() || findByPk()
    const customer04 = await Customer.findOne({
        where: { name: 'Joko Anwar' },
    });
    console.log(`[single row by findOne] SELECT * FROM...`)
    console.log(JSON.stringify(customer04, null, 2));

    // findByPk() -> spesifik hanya untuk si primary key
    const customer05 = await Customer.findByPk('4a1616af-7c37-4ac6-a7d2-bbcd15434f99');
    console.log(`[single row by pk] SELECT * FROM...`)
    console.log(JSON.stringify(customer05, null, 2));

    // findAndCountAll() -> digunakan untuk pagination (page, totalItem) limit, offset
    // Data 3 [1, 2, 3] (limit 1, offset 8) -> 2
    /**
     * 1 -> page 1
     * 2
     * 3
     * 4
     * 5 -> page 1
     * 6 -> page 2
     * 7
     * 8
     * 9
     * 10 -> page 2
     * 11 -> page 3
     */
    // Rumus Pagination: offset =

    // DELETE
    console.log(`DELETE FROM ...`);
    const delCustomer01 = await Customer.destroy({
        where: { id: '84b0b0f1-f636-4d81-b5a6-6c7be89e290f' }
    });
    // Membalikkan rowCount, 1 = Ada datanya, 0 = tidak ada datanya
    console.log('delCustomer01:',delCustomer01);

    // Select mengikut sertakan deleted_at column is not null
    const customer06 = await Customer.findAll({
        paranoid: false
    });
    console.log(`SELECT * FROM...`);
    console.log('After Delete')
    console.log(JSON.stringify(customer06, null, 2));

    // Update
    console.log(`UPDATE ...`);
    const upCustomer01 = await Customer.update(
        {
            balance: 1000000
        }, {
            where: {
                id: '4a1616af-7c37-4ac6-a7d2-bbcd15434f99'
            }
        });
 }

run()
