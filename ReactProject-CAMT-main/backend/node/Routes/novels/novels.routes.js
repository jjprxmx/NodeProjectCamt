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

router.get('/search/:debouncedPrefix', (req, res) => {
    const keyword = req.params.keyword;
    const searchResults = searchService.searchNovels(keyword); // ใช้ฟังก์ชันการค้นหาของคุณ
    res.json(searchResults);
  });

module.exports = router;