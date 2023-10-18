const express = require('express');
const router = express.Router();
const Reviews = require('../../model/Review');

async function getReview (req,res){
    const reviews = await Reviews.findAll();
    res.status(200).json(reviews);
}


async function getReviewbyidnovel(req, res) {
  const idNovel = req.params.id;

  const review = await Reviews.findOne({
    where:{
        id_novel:idNovel,
    }
  });
  res.status(200).json({details :review.details});
}

async function createReview(req, res) {
    const { id_user, id_novel, details, num_like } = req.body;
      const newReview = await Reviews.create({
        id_user,
        id_novel,
        details,
        num_like,
      });
      res.status(201).json(newReview)
  }


module.exports = {
    getReviewbyidnovel,
    getReview,
    createReview,
};
