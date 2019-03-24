const express=require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
var db = require("./lib/mongoose").db;  //链接数据库
const app =express();

//引进路由
const login = require("./route/login");
const register = require("./route/register");
const userinfo = require("./route/userinfo");
const shop = require("./route/shop");

app.use(cookieParser())
app.use(bodyParser.json()); // json文件
app.use(bodyParser.urlencoded({ extended: true })); // 处理普通表单
//使用路由
app.use("/login", login);
app.use("/register", register);
app.use("/userinfo", userinfo);
app.use("/shop", shop);

//配置服务端口
const port = process.env.PORT || 3000;

const server = app.listen(3000, function () {
    console.log('启动成功，端口号为：' + port);
})