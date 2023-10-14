const express = require('express');
const service = require('./user.service');
const router = express.Router();

router.post('/login', (req, res) => {
   return service.checkUsers(req, res);

});

router.post('/', (req, res) => {
    return service.checkCokkie(req, res);
});   
module.exports = router;   