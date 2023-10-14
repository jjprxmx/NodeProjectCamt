const express = require('express');

const Basket = require('../../model/Basket');
const { data } = require('../../config/database');

async function getAllBasket(req, res) {
    const basket = await Basket.findAll();
    res.send(basket);
}

async function getBasket(req, res) {
    const basket = await Basket.findOne({
        id_user: req.params.id 
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
    getAllBasket,
    getBasket,
    getItem,
    deleteItem,
    addItem,
};
