const express = require('express');
const router = express.Router();
const service = require('./review.service')

router.get ('/',(req,res) => {
    return service.getReview(req,res)
})

router.get('/:id/reviews/:idReview', async (req, res) => {
  return service.getReviewbyidnovel(req,res);
});

router.post('/:id', async (req, res) => {
  const id = Number.parseInt(req.params.id);
  const novel = novel.find((novel) => novel.id === id)
  try {
    const { id_user, id_novel, detail, numlike } = req.body;
    const newReview = await Review.create({
      id_user,
      id_novel,
      detail,
      numlike,
    });

    return res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to create a review' });
  }
});

module.exports = router;