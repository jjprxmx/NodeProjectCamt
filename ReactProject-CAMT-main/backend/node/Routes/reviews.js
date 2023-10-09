const express = require('express');

const data  = require('../novelData');

const router = express.Router();

router.get ('/',(req,res) => {
    res.json(data)
})

router.get ('/:id' , (req,res) =>{
    const id = Number.parseInt(req.params.id);
    const novel = data.find((p) => p.id === id );
    res.json(novel);
});

router.post('/',  (req, res) => {
    const { name, imageURL, type } = req.body;
    const product =  Product.create({
      name,
      imageURL,
      type
    });
    res.json(product);
  });
  
/*router.get ('/:id/reviews' , (req, res) => {
    const id = Number.parseInt(req.params.id);
    const query = require('url').parse(req.url,true).query;

    const page = Number.parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const review = getReviewsByNovelId(novelId, page, limit);
    res.json(review);
})*/
// router.get ('/:id/reviews/:page', (req, res) => {
//     const id = Number.parseInt(req.params.id);
//     const page = Number.parseInt(req.query.page);
//     const reviews = getReviewsByNovelId(id, page, limit);
//     res.json(reviews);
// });

module.exports = router;