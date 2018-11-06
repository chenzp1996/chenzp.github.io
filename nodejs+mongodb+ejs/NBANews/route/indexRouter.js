const express = require("express");
const router = express.Router();
const url = require('url');
const usersModel = require("../models/User").users;
const Articles = require("../models/Article").articles;

//直接访问根目录跳转到index
router.get("/",(req,res)=>{
    res.redirect("/index");
})


//打开主页时自动打开登录页面
router.get("/index",(req,res)=>{
    // console.log(url.parse(req.url,true).query.author)
    var author = url.parse(req.url,true).query.author;
    var whereStr;
    if(!author){
        whereStr = {};
    }else{
        whereStr = {author:author};
    }
    Articles.find(whereStr).populate('author').exec((error,result)=>{
        res.render("index",{
            post: result,
        });
    });
    // if(!req.session.user){//未登录账户，访问localhost:8080时显示所有用户发布的文章
    //      Articles.find().populate('author').exec((error,result)=>{
    //         res.render("index",{
    //             error: "未登陆",
    //             post: result,
    //         });
    //     });
    // }
    // else{//登录账户打开localhost:8080时显示的内容
    //     Articles.find().populate('author').exec((error,result)=>{
    //         res.render("index",{
    //             post: result
    //         });
    //         readCount(result);
    //     });
        
    // }
});
//查看个人主页时
// router.get("/index?author=:authorId",(req,res)=>{
    //未登录时访问/index，跳到登录界面并提醒用户登录
    // console.log(req.params.authorId);
    // if(!req.session.user){
    //     res.render("login",{
    //         error: "请先登陆账号",
    //     });
    // }else{//登录后访问/index显示个人发布过的往期文章
    //     Articles.find({author:req.session.user._id}).populate("author").exec((error,result)=>{
    //         // console.log(result)
    //         res.render("index",{
    //             post: result
    //         });
    //         readCount(result);
    //     });
        
    // }
// })
//浏览次数增加次数
// function readCount(result){
//     for(let i = 0;i<result.length;i++){
//         Articles.findByIdAndUpdate(result[i]._id,{readCount: result[i].readCount+1},(err)=>{
//             if(err){
//                 console.log("浏览次数更新失败")
//             }else{
//                 console.log("浏览次数成功+1")
//             }
//         });
//     }
// }

module.exports = router;