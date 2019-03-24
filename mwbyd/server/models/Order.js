const mongoose = require('mongoose');
//创建订单表
var  OrderSchema = new mongoose.Schema({
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,//指定User的_id
        ref:"users"
    },
    createTime: {//创建时间 
        type:Date,
        default:Date.now()
    },
    deadlineTime: {//预约截至时间，吃饭时间
        type:Date,
    },
    peopleNum: {//就餐人数
        type:Number
    },

});
//创建用户模型
exports.orders = mongoose.model("orders",OrderSchema);