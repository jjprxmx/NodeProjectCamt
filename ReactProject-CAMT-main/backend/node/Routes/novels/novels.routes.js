const express = require('express');
const service = require('./novels.service');

const router = express.Router();

router.get('/', (req, res) => {
    return service.findAllNovel(req, res);
});

router.get('/:id', (req, res) => {
    return service.findNovelById(req, res);
});

// เพิ่มเส้นทางใหม่สำหรับการค้นหาตามชื่อ
router.get('/search/:name', (req, res) => {
    return service.findNovelByName(req, res);
});

router.post('/', (req,res) => {
    return service.createNovel(req, res);
});

module.exports = router;