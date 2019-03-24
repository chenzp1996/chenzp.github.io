const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: String,//留言内容
    //留言者
    author:{
        type: mongoose.Schema.Types.ObjectId,//指定User的_id
        ref:"users"
    },
    //被留言的文章
    commentArticle:{
        type: mongoose.Schema.Types.ObjectId,//指定User的_id
        ref:"articles" 
    },
    commentTime:{
        type:Date,
        default:Date.now()
    }
});

exports.Comment = mongoose.model("Comment",commentSchema)