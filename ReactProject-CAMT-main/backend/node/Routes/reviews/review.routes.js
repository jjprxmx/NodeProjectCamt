const express = require('express');
const router = express.Router();
const service = require('./review.service')

router.get ('/',(req,res) => {
    return service.getReview(req,res)
})

router.get('/:id/Reviews', (req, res) => {
  return service.getReviewbyidnovel(req,res);
});

router.post('/', (req, res) => {
  return service.createReview(req,res);
});



module.exports = router;  