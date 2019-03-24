const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/meiweibuyongdui",(err)=>{
    if(err){
        throw err;
    }else{
        console.log("数据库连接成功!");
    }
});

exports.db = mongoose.connection;



