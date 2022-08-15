const Customer = require('../model/customer');
module.exports = (db) => { // CustomerRepository()
    const create = async (payload) => {
        try {
            return await Customer(db).create(payload)
        } catch (err) {
            return err.message
        }
    }

    const list = async () => {
        try {
            return await Customer(db).findAll()
        } catch (err) {
            return err.message
        }
    }

    return {
        create, list
    }
}
