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
        const {
            iduser:id_user,
            idnovel:id_novel
        } = req.params;
    
        const Order = await Orders.create({
            id_user,
            id_novel
        });
    
        res.status(201).json(Order);
      } catch (error) {
        console.error("Error creating novel:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }

}


module.exports = {
    getAllOrders,
    getOrdersById,
    addOrder
}
