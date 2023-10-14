const Orders = require('../../model/Orders');
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
        const orders = await Orders.findOne({id_user: req.params.id });
        if (!orders) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getAllOrders,
    getOrdersById
}
