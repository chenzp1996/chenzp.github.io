const express = require("express");
const router = express.Router();
const User = require("../models/User").users;

router.get("/:userId",(req,res)=>{
    console.log(req.params.userId);
    User.findById(req.params.userId,(error,result)=>{
        res.render("personalData",{user:result});
    })
    
});

module.exports = router;