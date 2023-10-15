const Orders = require('../../model/Orders');
const Novels = require('../../model/Novels');
const express = require('express');
function getAllOrders(req, res) {
    try {
        res.status(200).json(Orders);
    } catch (err) { 
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

async function getOrdersById(req, res) {
    try {
        const orders = await Orders.findAll(
            {
                where: {
                    id_user: req.params.id
                }
            }
            );
        if (!orders) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function addOrder(req, res) {
    try {
        const { id_user, id_novel } = req.body;
        const orders = await Orders.create({
            id_user,
            id_novel
        })
        if (!orders) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(orders);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json(err);
    }

}


module.exports = {
    getAllOrders,
    getOrdersById,
    addOrder
}
