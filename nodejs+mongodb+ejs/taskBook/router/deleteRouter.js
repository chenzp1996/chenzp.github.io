const express = require("express");
const router = express.Router();
const liModel = require("../lib/mongoose").liModel;

//删除li时，使用router参数，,这里请求url注意书写，index.js里use不要重复
router.get("/delete/:liId",(req,res)=>{
    // console.log(req.params.liId);
    //根据id删除对应的li
    liModel.findByIdAndDelete(req.params.liId,(err)=>{
        console.log("删除成功")
    })
    res.redirect("/");
});

module.exports = router;
