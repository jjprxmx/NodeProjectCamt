const Novels = require("../../model/Novels");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
async function findAllNovel(req, res) {
  const novels = await Novels.findAll();
  res.status(200).json(novels);
}

async function findNovelById(req, res) {
  const novel = await Novels.findOne({
    where: { id: req.params.id },
  });

  if (novel) {
    res.status(200).json(novel);
  } else {
    res.status(404).json({ message: "Novel not found" });
  }
}

async function createNovel(req, res) {
  try {
    const {
      name,
      price,
      category,
      numpage,
      rating,
      promotion,
      file_pic,
      file_test,
      file_real,
      release_date,
      author,
      description,
      cover_price
    } = req.body;

    const novel = await Novels.create({
      name,
      price,
      category,
      numpage,
      rating,
      promotion,
      file_pic,
      file_test,
      file_real,
      release_date,
      author,
      description,
      cover_price
    });

    res.status(201).json(novel);
  } catch (error) {
    console.error("Error creating novel:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}



async function findNovelByName(req, res) {
  const nameToSearch = req.params.name; 

  
  const novel = await Novels.findAll({
    where: {
      name: {
        [Op.like]: `%${nameToSearch}%`
      }
    }
  });
  if (novel) {
    res.status(200).json(novel); 
  } else {
    res.status(404).json({ message: "Novel not found" });
  }
}

module.exports = {
  findAllNovel,
  findNovelById,
  createNovel,
  findNovelByName
};


