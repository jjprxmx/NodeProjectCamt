const express = require('express');

const {basketData} = require('../../model/Basket');
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
    const basket = await Basket.findOne({
        where: {
            id_user: req.params.id_user
        }
    });
    res.send(basket);
}

async function getItem(req, res) {
    const basket = await Basket.findOne({
        where: {
            id_user: req.params.id_user,
            id_novel: req.params.id_novel
        }
    });
    res.send(basket.id_novel);
}

async function deleteItem(req, res) {
    await Basket.destroy({
        where: {
            id_user: req.params.id_user,
            id_novel: req.params.id_novel
        }
    });
    res.sendStatus(204);
}

async function addItem(req, res) {
    const { id_user, id_novel } = req.body
    const basket = await Basket.create({
        id_user,
        id_novel
    })
    res.status(201).json(basket);
}

module.exports = {
    getBasket,
    getItem,
    deleteItem,
    addItem,
};
