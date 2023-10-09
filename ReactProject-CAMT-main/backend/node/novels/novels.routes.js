const express = require('express');
const service = require('./novels.service');

const router = express.Router();

router.get('/', (req, res) => {
    return service.findAllNovel(req, res);
});

router.get('/:id', (req, res) => {
    return service.findNovelById(req, res);
});

router.post('/', (req,res) => {
    return service.createNovel(req, res);
});

module.exports = router;