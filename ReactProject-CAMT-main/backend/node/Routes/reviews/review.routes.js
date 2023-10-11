const express = require('express');
const router = express.Router();
const service = require('./review.service')

router.get ('/',(req,res) => {
    res.json(data)
})

router.get('/:id_novel/reviews/:id', async (req, res) => {
  return service.getReview(req,res);
});

router.post('/', async (req, res) => {
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