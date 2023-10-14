const express = require('express');

const service = require('./basket.service')

const router = express.Router();

router.get('/', async (req, res) => {
    return await service.getAllBasket(req, res);
})

router.get('/:id_user/basket', async (req, res) => {
    return await service.getBasket(req, res);
})

router.get('/:id_user/basket/:id_novel', async (req, res) => {
    return await service.getItem(req, res);   
})

router.delete('/:id_user/basket/:id_novel', async (req, res) => {
    return await service.deleteItem(req, res);
})

router.post('/', async (req, res) => {
    return await service.addItem(req, res);
});

module.exports = router;