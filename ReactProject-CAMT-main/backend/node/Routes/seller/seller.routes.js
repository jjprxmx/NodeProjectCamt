const express = require('express');
const service = require('./seller.service')
const router = express.Router();

router.get('/', async (req, res) => {
    return await service.getSeller(req, res);
});

router.post('/', async (req, res) => {
    return await service.createSeller(req, res);
});

module.exports = router;
