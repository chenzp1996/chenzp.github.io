const express = require("express");
const router = express.Router();
const liModel = require("../lib/mongoose").liModel;

router.get("/finished/:liId",(req,res)=>{
    // console.log(req.params.liId);
    liModel.findById(req.params.liId,(error,result)=>{
        // console.log(result);
        liModel.findByIdAndUpdate(result._id,{isfinished: !result.isfinished},(error,result)=>{
            console.log("已修改为完成!");
        });
    });
    res.redirect("/");
});

module.exports = router;