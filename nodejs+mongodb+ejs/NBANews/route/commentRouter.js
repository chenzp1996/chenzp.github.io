const express = require("express");
const router = express.Router();
const Article = require("../models/Article").articles;
const Comment = require("../models/Comment").Comment; 

router.post("/:postId",(req,res,next)=>{
    //使用中间件判断当前用户是否登录
    var user = req.session.user;
    if(!req.session.user){
        req.flash("error","登录您的账号后可继续留言！")
        res.redirect("/login");
    }else{
        next();
    }
    
},(req,res)=>{
    // console.log(req.body,req.params);
    Comment.create({
        content: req.body.content,
        author: req.session.user._id,
        commentArticle: req.params.postId
    },(err,result)=>{
        if(err){
            req.flash("error","留言失败")
            console.log("留言失败",err);
        }
        Article.findById((result.commentArticle._id),(err,res)=>{
            if(err){
                console.log("留言次数修改失败");
            }else{
                //留言后留言次数+1
                Article.updateOne({_id:res._id},{comments:res.comments+1},(err)=>{
                    if(err){
                        throw err;
                    }else{
                        console.log("留言次数+1");
                    }
                });
                
            }
        })
        req.flash("info","留言成功");
        res.redirect("back");
    })
});

//删除留言
router.get("/delete/:commentId",(req,res,next)=>{
    //使用中间件判断当前用户是否登录
    var user = req.session.user;
    if(!req.session.user){
        req.flash("error","您没有权限删除留言")
        res.redirect("back");
    }else{
        next();
    }
    
},(req,res)=>{
    var user = req.session.user;
    
    Comment.findById(req.params.commentId,(error,findComment)=>{
        //如果当前账户和留言者是同一个人则授权删除
        if(user._id == findComment.author){
            Comment.findByIdAndDelete(req.params.commentId,(error,result)=>{
                if(error){
                    console.log("删除留言失败")
                }else{
                    console.log("删除留言成功");
                    //删除留言后留言次数-1
                    Article.findById((result.commentArticle._id),(err,res)=>{
                        if(err){
                            console.log("留言次数修改失败");
                        }else{
                            //删除留言后留言数目
                            Article.updateOne({_id:res._id},{comments:res.comments-1},(err)=>{
                                if(err){
                                    throw err;
                                }else{
                                    console.log("留言次数-1");
                                }
                            });
                            
                        }
                    })
                    req.flash("info","删除留言成功")
                    res.redirect("back");
                }
            })
        }
        else{
            req.flash("error","你没有权限删除该留言")
            res.redirect("back");
        }
    })
     
    
}); 

module.exports = router;