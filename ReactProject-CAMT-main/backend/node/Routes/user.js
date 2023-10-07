
const express = require('express');
const novelData = require('../userInfo');
const router = express.Router();


  router.post('/auth/login', (req, res) => {

     const { username, password } = req.body;
     const user = novelData.find((user) => user.username === username && user.password === password);

     if (user) {
      res.json("username:"+user.name+" level:"+user.level);
     }
     else{
       res.send("fail");
    }

  
  });

 
  module.exports = router;