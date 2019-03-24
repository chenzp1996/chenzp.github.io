const mongoose = require('mongoose');
//创建用户表
var usersSchema = new mongoose.Schema({
    username: String,//用户账号
    password: String,//密码
    sex: String,//性别
    avatar: String,//头像照片
    portray: String//个人简介
});
//创建用户模型
exports.users = mongoose.model("users",usersSchema);