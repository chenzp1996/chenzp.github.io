const mongoose = require('mongoose');
//创建文章表
var  articlesSchema = new mongoose.Schema({
    title: String,//文章标题
    content: String,//文章内容
    author:{
        type: mongoose.Schema.Types.ObjectId,//指定User的_id
        ref:"users"
    },
    createTime: {//创建时间 
        type:Date,
        default:Date.now()
    },
    comments: {//文章留言
        type:Number,
        default:0
    },
    readCount: {//浏览次数
        type:Number,
        default:0
    }
});
//创建用户模型
exports.articles = mongoose.model("articles",articlesSchema);