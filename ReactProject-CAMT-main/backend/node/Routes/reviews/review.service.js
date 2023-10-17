const express = require('express');
const router = express.Router();
const {Review} = require('../../model/Review');

async function getReview (req,res){
    const review = await Review.find({
        where:{
            id_novel:req.params.id,
        }
    })
    res.send(review.id_novel)
}


async function getReviewbyidnovel(req, res) {
  const review = await Review.find({
    where:{
        id_novel:req.params.id,
        detail:req.params.idReview
    }
  });
  res.send(review.detail);
}

async function createReview(id_user, id_novel, detail, numlike) {
    try {
      const newReview = await Review.create({
        id_user,
        id_novel,
        detail,
        numlike,
      });
      return newReview;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create a review');
    }
  }


module.exports = {
    getReviewbyidnovel,
    getReview,
    createReview,
};
