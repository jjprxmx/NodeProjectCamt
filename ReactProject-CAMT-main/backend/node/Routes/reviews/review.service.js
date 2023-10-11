const express = require('express');
const router = express.Router();
const Review = require('../../model/Review');

async function getReview (req,res){
    const review = await Review.find({
        where:{
            id_novel:req.params.id,
        }
    })
    res.send(Review.id_novel)
}


async function getReviewbyidnovel(req, res) {
  const review = await Review.find({
    where:{
        id_novel:req.params.id,
        detail:req.params.idReview
    }
  });
  res.send(Review.detail);
}

async function addReview(req, res) {
    const { id_user, id_novel, detail, } = req.body;
    const review = await basketData.create({
        id_user,
        id_novel,
        detail
    })
    res.json(review);
}



module.exports = {
    getReviewbyidnovel,
    getReview,
    addReview
};
