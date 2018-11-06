const express = require("express");
const router = express.Router();
const Articles = require("../models/Article").articles;

router.get("/",(req,res)=>{
    res.render("article-create",{
        post: req.session.user
    });
});
router.post("/",(req,res,next)=>{
    //使用中间件判断当前用户是否登录
    var user = req.session.user;
    if(!req.session.user){
        req.flash("error","登录您的账号后才可以发表文章！")
        res.redirect("/login");
    }else{
        next();
    }
    
},(req,res)=>{
    // console.log(req.body)
    let title = req.body.title;
    let content = req.body.content;
    try {
        if(!title){
            throw new Error('文字标题不能为空')
        }
        if(!content){
            throw new Error('文章内容不能为空')
        }
    } catch (e) {
        req.flash("error",e.message);
        res.redirect("back");
        return//如果出错则停止执行下面代码
    }
    Articles.create({
        title:title,
        content:content,
        author:req.body.author
    },(err,result)=>{
        if(err){
            console.log("文章发布失败")
        }else{
            req.flash("info","文章发表成功！")
            res.redirect("/post/" + result._id);
        }
    });
})

module.exports = router;