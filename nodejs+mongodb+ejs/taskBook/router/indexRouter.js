const express = require("express");
const router = express.Router();
const liModel = require("../lib/mongoose").liModel;

//使用中间件
router.use((req,res,next)=>{
    next();
});

router.get("/",(req,res)=>{
    
    //获取数据库所有数据，并渲染到前端页面的位置
    liModel.find((error,result)=>{
        // console.log(result[0].content);
        res.render("index",{
            li: result
        });
    })
    
});

router.post("/",(req,res)=>{
    if(req.body.content){
        //实例化一个li
        // console.log(req.body.content)
        var li = new liModel({
            content: req.body.content
        });
        li.save();
    }
    //请求成功后重定向到"/"
    res.redirect('/');
});

module.exports = router;


