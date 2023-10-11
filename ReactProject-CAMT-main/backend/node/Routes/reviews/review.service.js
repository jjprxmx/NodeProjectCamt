const express = require('express');
const router = express.Router();
const Review = require('../../model/Review');
const userData = require('../../userData');


async function getReview(req, res) {
  const novelId = Number.parseInt(req.params.id_novel);
  const reviewId = Number.parseInt(req.params.id);

  try {
    const novel = await userData.findByid(novelId);

    if (!novel) {
      return res.status(404).json({ message: 'Novel not found' });
    }

    const review = await Review.findOne({
      where: { id: reviewId, id_novel: novelId },
    });

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json(review.detail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
    getReview,
    
};
