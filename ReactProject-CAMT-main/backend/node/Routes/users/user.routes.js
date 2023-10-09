const express = require('express');
const service = require('./user.service');
const router = express.Router();

router.post('/auth/login', (req, res) => {
   return service.checkUsers(req, res);

});

module.exports = router;