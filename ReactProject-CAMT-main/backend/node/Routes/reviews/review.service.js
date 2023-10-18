const express = require('express');
const router = express.Router();
const Review = require('../../model/Review');

async function getReview (req,res){
    res.send(Review.id_novel)
}


async function getReviewbyidnovel(req, res) {
  const review = await Review.findAll({
    where:{
        id_novel:req.params.id,
        details:req.params.idReview
    }
  });
  res.send(review.detail);
}

async function createReview(req, res) {
    const { id_user, id_novel, details, num_like } = req.body;
      const newReview = await Review.create({
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
