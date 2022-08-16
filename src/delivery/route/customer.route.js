const express = require('express');
const router = express.Router();
module.exports = (customerController) => {
    const {  create, list, findById, update, remove } = customerController();
    router.post('/', create);
    router.get('/', list);
    router.get('/:id', findById);
    router.put('/', update);
    router.delete('/:id', remove);
    return router;
}
