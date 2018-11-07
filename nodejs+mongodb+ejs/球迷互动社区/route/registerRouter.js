const express = require("express");
const router = express.Router();
const userModel = require("../models/User").usersModel;
const multer = require("multer");
const path = require("path");
const fs = require("fs");

//文件上传
var storage = multer.diskStorage({
    //指定文件存放位置
    destination: function (req, file, cb) {
        cb(null, '../blog/public/uploads')
    },
    //指定文件命名
    filename: function (req, file, cb) {
        // console.log(file);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage });

//点击注册键打开注册页面
router.get("/", (req, res) => {
    res.render("register");
})

//点击登录时查找数据库，检查身份
router.post("/",upload.single('avatar'), (req, res,next) => {
    var username = req.body.username;
    var password = req.body.password[0];
    var confirmPassword = req.body.password[1];
    var portray = req.body.portray;
    if(req.file){
        var avatar = req.file.filename;
    }
    try {
        if(!username){
            throw new Error('用户名不能为空')
        }
        if(!password){
            throw new Error('密码不能为空')
        }
        if(!confirmPassword){
            throw new Error('请再次输入密码')
        }
        if(!portray){
            throw new Error('个人简介不能为空')
        }
        if(!avatar){
            throw new Error('请上传你的头像')
        }
    } catch (e) {
        //如果报错，则删除刚上传的头像图片
        if(avatar){
            fs.unlink(avatar.path,(err)=>{
                if(err){
                    console.log("删除图片失败");
                }else{
                    console.log("删除图片成功");
                }
            })
        }
        req.flash("error",e.message);
        res.redirect("back");
        return//如果出错则停止执行下面代码
    }
    // 查找账户
    userModel.find({
        username: req.body.username
    }, (err, result) => {
        if (result.length === 0) {
            //判断两次密码是否输入一致
            if (req.body.password[0] === req.body.password[1]) {

                //密码一致则写入数据库
                userModel.create({
                    username: req.body.username,
                    password: req.body.password[0],
                    sex: req.body.sex,
                    portray: req.body.portray,
                    avatar: req.file.filename
                })

                req.flash("info","注册成功！");
                res.redirect("login");
            }else{
                // 密码输入不一致
                req.flash("error","两次输入密码不一致，请重试!");
                res.redirect("back");
            }
        } else {
            // 用户名存在
            req.flash("error","用户名存在，请直接登陆或换账号重试!");
            res.redirect("back");
        }
    })

})

module.exports = router;