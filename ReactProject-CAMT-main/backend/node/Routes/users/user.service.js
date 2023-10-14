const express = require('express');


const Users = require('../../model/Users');
async function checkUsers(req, res) {

    try {
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

async function checkCokkie(req,res)
{

    if(!req.cookies.id){
      return res.status(400).json({
        status: 'Failed',
        message: 'No data',
      });
    }
    try{

      const connection = await Users.findOne({
        where: {
          id: req.cookies.id
        }
      })

      if(!connection){
        return res.status(400).json({
          status: 'Failed',
          message: 'No data',
        })
      }

      res.json(connection)

    }
    catch(err){
      res.json("error")
    }
}
  


module.exports = {
    checkUsers,
    checkCokkie
}