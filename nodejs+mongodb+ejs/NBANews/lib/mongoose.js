const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog",(err)=>{
    if(err){
        console.log("数据库连接失败!");
    }else{
        console.log("数据库连接成功!");
    }
});

exports.db = mongoose.connection;



