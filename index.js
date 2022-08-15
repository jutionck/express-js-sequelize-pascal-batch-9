const Customer = require('./src/model/customer');
const DbMigration = require('./src/config/db-migration');
const run = async () => {

    await DbMigration();
    // manager -> conn, repo, service
    // CRUD Basic
    // const addCustomerBulk = await Customer().bulkCreate([
    //     {
    //         name: 'John Samuel',
    //         address: 'Bandung',
    //         phone: '9229020',
    //         email: 'john.samuel@usa.com',
    //         balance: 50
    //     },
    //     {
    //         name: 'Manoj P',
    //         address: 'Jakarta',
    //         phone: '2829299',
    //         email: 'manoj.p@usa.com',
    //         balance: 100
    //     },
    //     {
    //         name: 'Fadli Haekal',
    //         address: 'Malang',
    //         phone: '2829992',
    //         email: 'fadli.haikal@usa.com',
    //         balance: 20
    //     }
    // ]);
    // console.log('addCustomerBulk:', addCustomerBulk.length)

    // Select * FROM ....
    const customers = await Customer().findAll();
    console.log(`SELECT * FROM...`)
    console.log(JSON.stringify(customers, null, 2));


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
 }

run()
