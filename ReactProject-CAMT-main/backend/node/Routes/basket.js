const express = require('express');
// const novelData = require('../novelData');
const userData = require('../userData');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/:id', (req, res) => {
    const ID = Number.parseInt(req.params.id);
    const user = userData.find((user) => user.id === ID)
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
})

router.get('/:id/basket', (req, res) => {
    const ID = Number.parseInt(req.params.id);
    const user = userData.find((user) => user.id === ID)
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user.basket);
})

router.get('/:id/basket/:itemID', (req, res) => {
    const ID = Number.parseInt(req.params.id);
    const user = userData.find((user) => user.id === ID)

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const itemID = Number.parseInt(req.params.itemID);
    const item = user.basket.find((basket) => basket.id === itemID);

    if (!item) {
        return res.status(404).json({ message: 'Item not found in user basket' });
    }

    res.status(200).json(item);
})

// never test, never want to try, I can, I just don't want to
router.delete('/:id/basket/:itemID', (req, res) => {
    const ID = Number.parseInt(req.params.id);
    const user = userData.find((user) => user.id === ID)

    if (user === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const itemID = Number.parseInt(req.params.itemID);
    const item = user.basket.find((basket) => basket.id === itemID);

    if (item === -1) {
        return res.status(404).json({ message: 'Item not found in user basket' });
    }
    
    user.basket.splice(item, 1);

    res.status(204).send();
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