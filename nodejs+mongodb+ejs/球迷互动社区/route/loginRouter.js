const express = require("express");
const router = express.Router();
const usersModel = require("../models/User").users;

//打开主页时自动打开登录页面
router.get("/",(req,res)=>{
    res.render("login");
})
router.get("/",(req,res)=>{
    res.render("register");
})
//点击登录时查找数据库，检查身份
router.post("/",(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    usersModel.findOne({username:username},(error,result)=>{
        // console.log(result);
        if(result.length === 0){
            req.flash("error","用户名不存在，请检查或注册！");
            res.redirect("login");
            return 
        }else{
            if(result.password !== password){
                req.flash("error","用户名不存在或密码输入错误！");
                return res.redirect("login");
            }else{
                req.session.user = result;
                req.flash("info","登陆成功!");
                res.redirect("index?author=" + result._id);
            }
        }
    });
})

module.exports = router;