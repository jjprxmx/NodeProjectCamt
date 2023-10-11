const express = require('express');

const basketData = require('../../model/Basket');
// const usersData = require('../../model/Users');
// const novelsData = require('../../model/Novels');
const { data } = require('../../config/database');

// async function getAllUsers(req, res) {
//     const basket = await Baskets.findAll();
//     res.status(200).send(basket);
// }

// async function getById(req, res) {
//     const ID = Number.parseInt(req.params.id);
//     const user = userData.find((user) => user.id === ID)

//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
// }

async function getBasket(req, res) {
    const basket = await basketData.find({
        where: {
            id_user: req.params.id
        }
    });
    res.send(basket.id_user);
}

async function getItem(req, res) {
    const basket = await basketData.find({
        where: {
            id_user: req.params.id,
            id_novel: req.params.itemID
        }
    });
    res.send(basket.id_novel);
}

async function deleteItem(req, res) {
    await basketData.destroy({
        where: {
            id_user: req.params.id,
            id_novel: req.params.itemID
        }
    });
    res.sendStatus(204);
}

async function addItem(req, res) {
    const { id_user, id_novel } = req.body
    const basket = await basketData.create({
        id_user,
        id_novel
    })
    res.json(basket);
}

module.exports = {
    // getAllUsers,
    // getById,
    getBasket,
    getItem,
    deleteItem,
    addItem
};