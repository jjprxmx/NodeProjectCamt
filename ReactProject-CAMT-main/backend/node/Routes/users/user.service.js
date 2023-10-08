const express = require('express');


const Users = require('../../model/Users');
async function checkUsers(req, res) {

    try {
        //const user = Users.find((user) => user.username === username && user.password === password);
        const user = await Users.findOne({
           where: {
                username: req.body.username,
                password: req.body.password
        }
        });
        if (user) {
         res.json(user)
        }
        else{
          res.send("fail");
       }
    } catch (err) {
        res.json(err);
    }
}

module.exports = {
    checkUsers
}