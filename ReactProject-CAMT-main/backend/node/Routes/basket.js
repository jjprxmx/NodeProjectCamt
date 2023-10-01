const express = require('express');
const novelData = require('../novelData');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json(novelData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/:id', (req, res) => {
    const productId = Number.parseInt(req.params.id);
    const product = novelData.find((product) => product.id === productId)
    res.status(200).json(product);
})

router.delete('/:id', (req, res) => {
    const productId = Number.parseInt(req.params.id);
    const product = novelData.find((product) => product.id === productId)
    novelData.delete(product);
    res.status(204);
});

let currentProductId = 0;
for (const product of novelData) {
    if (product.id > currentProductId) {
        currentProductId = product.id;
    }
}
router.post('/', (req, res) => {
    // When creating the product, make sure to increase the currentProductId by 1
    const { name, imgURL, type } = req.body
    const product = {
        id: ++currentProductId,
        name: name,
        imgURL: imgURL,
        type: type
    }
    novelData.push(product);
    res.status(200).json(product);
});

module.exports = router;