const express = require('express');
const service = require('./seller.service')
const router = express.Router();

router.get('/', function (req, res) {
    return service.getSeller(req, res);
});

router.post('/', function (req, res) {
    return service.createSeller(req, res);
});

module.exports = router;