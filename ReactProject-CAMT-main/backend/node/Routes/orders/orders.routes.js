const express = require('express');
const service = require('./orders.service');
const router = express.Router();


router.get ('/',(req,res) => {
   return service.getAllOrders(req, res);

});

router.get ('/:id/Orders' , (req,res) =>{
    return service.getOrdersById(req, res);
});

router.post ('/' , (req,res) =>{
    return service.addOrder(req, res);
});

module.exports = router;