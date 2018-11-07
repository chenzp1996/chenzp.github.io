const express = require("express");
const router = express.Router();
const url = require("url");
const Article = require("../models/Article").articles;
const Comment = require("../models/Comment").Comment;

router.get("/:postId",(req,res)=>{
    Article.findById(req.params.postId).populate("author").exec((error,result)=>{
        // console.log(result);
        Comment.find({commentArticle: req.params.postId}).populate("author").exec((error1,result1)=>{
            res.render("article-detail",{
                post: result,
                comment: result1,
                
            });
        })
        
        Article.findByIdAndUpdate(req.params.postId,{readCount: result.readCount+1},(err)=>{
            if(err){
                console.log("浏览次数更新失败")
            }else{
                // console.log("浏览次数成功+1")
            }
        });
    })
});

//删除文章
router.get("/:postId/delete",(req,res)=>{
    // console.log(req.params)
    var user = req.session.user;
    //先检查是否已经登陆账号
    if(user){
        Article.findById(req.params.postId,(error,findArtRes)=>{
            //先操作的账户是不是文章作者
            if(findArtRes.author == user._id){
                // console.log("是本人")
                Article.findByIdAndDelete(req.params.postId,(error,deleteArtRes)=>{
                    if(error){
                        console.log("删除文章失败",error);
                    }else{
                        req.flash("info","删除文章成功");
                        res.redirect("/index");
                    }
                })
            }else{
                req.flash("error","您无权限删除本文章");
                res.redirect("back");
            }
        })
    }
});

//编辑文章
router.get("/:postId/edit",(req,res)=>{
    var user = req.session.user;
    //先检查是否已经登陆账号
    if(user){
        Article.findById(req.params.postId,(error,findArtRes)=>{
            //先操作的账户是不是文章作者
            if(findArtRes.author == user._id){
                // console.log("是本人")
                Article.findById(req.params.postId).populate("author").exec((error,fineArtRes)=>{
                    if(error){
                        console.log("查找文章失败",error);
                    }else{
                        res.render("article-edit",{post:fineArtRes});
                    }
                })
            }else{
                req.flash("error","您无权限编辑本文章");
                res.redirect("back");
            }
        })
    }
});

//提交编辑内容修改文章
router.post("/:postId/edit",(req,res)=>{
    var user = req.session.user;
    //先检查是否已经登陆账号
    if(user){
        Article.findById(req.params.postId,(error,findArtRes)=>{
            //先操作的账户是不是文章作者
            if(findArtRes.author == user._id){
                // console.log("是本人")
                // console.log(req.body);
                Article.findByIdAndUpdate(req.params.postId,{title:req.body.title,content:req.body.content},(error,fineArtRes)=>{
                    if(error){
                        console.log("编辑文章失败",error);
                    }else{
                        req.flash("info","编辑成功");
                        res.redirect("/post/" + req.params.postId);
                        
                    }
                })
            }else{
                req.flash("error","您无权限编辑本文章");
                res.redirect("back");
            }
        })
    }
});

module.exports = router;