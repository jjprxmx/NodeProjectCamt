const express = require('express');
const novelData = require('../novelData');

const novelRouter = express.Router();


novelRouter.get('/:id', (req, res) => {
    const novelID = Number.parseInt(req.params.id);
    const novel = novelData.find((novel) => novel.id === novelID);
    res.json(novel);
})

novelRouter.get('/', (req, res) => {
    res.json(novelData); 
});

let currentNovelId = novelData.length;
novelRouter.post('/', (req, res) => {
    const { name, author, category, imgUrl } = req.body;
    const novel = {
        id: ++currentNovelId,
        name,
        author,
        category,
        imgUrl
    };
    novelData.push(novel); 
    res.json(novel);
});

module.exports = novelRouter;