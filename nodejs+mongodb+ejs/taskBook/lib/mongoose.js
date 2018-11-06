const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Tode",(error)=>{
    if(error) {
        console.log("数据库连接失败")
    }else{
        console.log("数据库连接成功")
    }
});

//创建Schema对象
var liSchema = new mongoose.Schema({
    content: String,
    isfinished: {
        type: Boolean,
        default: false
    }
});

exports.liModel = mongoose.model("liModel",liSchema);
