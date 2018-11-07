const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    // console.log(req.session.user);
    req.session.user = null;
    res.redirect("back");
});

module.exports = router;