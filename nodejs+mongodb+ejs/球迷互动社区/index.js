const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
var db = require("./lib/mongoose").db;
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");

const app = express();

//使用session,并保存到数据库中
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000
        },
        store: new MongoStore({
            mongooseConnection: db
        })
    })
);

//使用flash
app.use(flash());

// 使用flash中间件
app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    res.locals.error = req.flash("error").toString();
    res.locals.info = req.flash("info").toString();
    next();
});

//引入路由
const indexRouter = require("./route/indexRouter")
const loginRouter = require("./route/loginRouter");
const registerRouter = require("./route/registerRouter");
const createRouter = require("./route/createRouter");
const logoutRouter = require("./route/logoutRouter");
const postRouter = require("./route/postRouter");
const commentRouter = require("./route/commentRouter");
const personalRouter = require("./route/personalData");

//设置静态文件
app.use(express.static(path.join(__dirname, "public")));

//使用body-parser解析post请求数据
app.use(bodyParser.urlencoded({
    extended: false
}));

//设置模板引擎目录
app.set("views", "./views");
//设置模板引擎种类
app.set("view engine", "ejs");

//使用路由
app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/create", createRouter);
app.use("/logout",logoutRouter);
app.use("/post",postRouter);
app.use("/comment",commentRouter);
app.use("/personalData",personalRouter);


app.listen(8080, (err) => {
    console.log("+++++++++++++++++++");
});