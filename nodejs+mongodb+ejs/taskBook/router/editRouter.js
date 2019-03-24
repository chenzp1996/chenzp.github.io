const express = require("express");
const router = express.Router();
const liModel = require("../lib/mongoose").liModel;

router.post("/edit/:liId",(req,res)=>{
    // console.log(req.body.content,req.params.liId);
    liModel.findByIdAndUpdate(req.params.liId,{content:req.body.content},(err,result)=>{
        console.log("更新成功");
        // liModel.findByIdAndUpdate(req.params.liId,{isfinashed:!result.isfinished});
    });
    res.redirect("/");
});

module.exports = router;