const express = require('express');
const service = require('./orders.service');
const router = express.Router();


router.get ('/',(req,res) => {
   return service.getAllOrders(req, res);

});

router.get ('/:id' , (req,res) =>{
    return service.getOrdersById(req, res);
});

module.exports = router;