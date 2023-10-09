const express = require('express');

const data  = require('../novelData');
const router = express.Router();

router.get ('/',(req,res) => {
    res.json(data)
})

router.get ('/:id' , (req,res) =>{
    const id = Number.parseInt(req.params.id);
    const novel = data.find((p) => p.id === id );
    res.json(novel);
});

//oo

module.exports = router; 