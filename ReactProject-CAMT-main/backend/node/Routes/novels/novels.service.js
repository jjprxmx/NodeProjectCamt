const novelData = require('../../novelData');

function findAllNovel(req,res){
    try{
        res.status(200).json(novelData);
    }catch{
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

function findNovelById(req,res){
    const novelID = Number.parseInt(req.params.id);
    const novel = novelData.find((novel) => novel.id === novelID);
    res.status(200).json(novel);
}

let currentNovelId = novelData.length;
function createNovel(req,res){
    const { name, author, category, imgUrl } = req.body;
    const novel = {
        id: ++currentNovelId,
        name,
        author,
        category,
        imgUrl
    };
    novelData.push(novel); 
    res.status(200).json(novel);
}
module.exports = {
    findAllNovel,
    findNovelById,
    createNovel
}