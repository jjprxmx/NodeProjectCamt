const express = require('express');
const service = require('./basket.service')

const userData = require('../userData');

const router = express.Router();

router.get('/', (req, res) => {
    return service.getAllUsers(req, res);
})

router.get('/:id', async (req, res) => {
    const basket = await service.getBasket(req, res);
    return basket;
})

router.get('/:id/basket', (req, res) => {
    return service.getBasket(req, res);
})

router.get('/:id/basket/:itemID', (req, res) => {
    return service.getItem(req, res);
})

// never test, never want to try, I can, I just don't want to
router.delete('/:id/basket/:itemID', (req, res) => {
    return service.deleteItem(req, res);
})

// not working yet, need data from order
let currentProductId = 0;
for (const product of userData) {
    if (product.id > currentProductId) {
        currentProductId = product.id;
    }
}
router.post('/:id', (req, res) => {
    const ID = Number.parseInt(req.params.id);
    const user = userData.find((user) => user.id === ID)

    if (user === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.basket.push(currentProductId);
    const { name, author, category, imgUrl } = req.body
    const product = {
        id: ++currentProductId,
        name: name,
        author: author,
        category: category,
        imgUrl: imgUrl
    }
    userData.push(product);
    res.status(200).json(product);
});

module.exports = router;