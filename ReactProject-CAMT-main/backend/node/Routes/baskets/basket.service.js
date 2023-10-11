const userData = require('../../userData');
function getAllUsers(req, res) {
    try {
        res.status(200).json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

async function getById(req, res) {
    const ID = Number.parseInt(req.params.id);
    const user = userData.find((user) => user.id === ID)

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
}

async function getBasket(req, res) {
    try {
        const user = await userData.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user.basket);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

function getItem(req, res) {
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
}

function deleteItem(req, res) {
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
}

module.exports = {
    getAllUsers,
    getById,
    getBasket,
    getItem,
    deleteItem,
};