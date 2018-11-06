const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const bodyParser = require("body-parser");
//引用路由
const indexRouter = require("./router/indexRouter");
const deteleRouter = require("./router/deleteRouter");
const finashRouter = require("./router/finashRouter");
const editRouter = require("./router/editRouter");

const app = express();

//使用 body-parser 解析POST请求
app.use(bodyParser.urlencoded({
    extended:false
}));
//使用中间件,所有请求都将先使用该中间件
app.use((req,res,next)=>{
    next();
})

//设置静态文件
app.use(express.static(path.join(__dirname,"public")));
//设置模板引擎
app.set("views","./views");
app.set("view engine","ejs");

//使用路由
app.use("/",indexRouter);
app.use("/",deteleRouter);
app.use("/",finashRouter);
app.use("/",editRouter);

app.listen(8080,()=>{
    console.log("++++++++++++++++++++");
});