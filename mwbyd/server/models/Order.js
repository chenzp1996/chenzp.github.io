const mongoose = require('mongoose');
//创建订单表
var  OrderSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,//指定User的_id
        ref:"users"
    },
    name:{
        type:String,
    },
    phone:{
        type:String
    },
    eatTime: {//预约截至时间，吃饭时间
        type:String,
    },
    peopleNum: {//就餐人数
        type:Number
    },
    createTime: {//创建时间 
        type:Date,
        default:Date.now()
    },
});
//创建用户模型
exports.Orders = mongoose.model("Orders",OrderSchema);