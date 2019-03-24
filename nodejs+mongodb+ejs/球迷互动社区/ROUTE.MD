#router分析

**1. registerRouter(路由为"localhost:8080/register")** 
+ get方式请求，渲染"register.ejs"模板
+ post方式请求，从form表单获取数据，插入数据库Users表，注册成功默认打开登录界面("/login")   

**2. loginRouter(路由为"localhost:8080/login")**
+ get方式请求，渲染"login.ejs"模板
+ post方式请求，从form表单获取数据，查询Users表，登录成功默认打开个人主页("/index")

**3. indexRouter(路由为"localhost:8080/index")**
+ get方式请求，从数据库Articles表获取所有文章渲染到"index.ejs"模板

**4. createRouter(路由为"localhost:8080/create")**
+ get方式请求，渲染"article-create.ejs"模板
+ post方式请求,从form表单获取数据,根据"models/Article.js"新建文章到数据库Article表中，创建成功后默认返回到个人主页("/index")

**5. postRouter(路由为"localhost:8080/post")**
+ get方式请求(/post/:postId)，数据库Articles表获取_id=postId的文章和相关留言渲染"article-detail.ejs"模板
+ get方式请求(/post/:postId/delete),从数据库Articles表查找_id=postId的文章,检查账户权限,删除该文章，删除成功后默认返回到个人主页("/index")
+ get方式请求(/post/:postId/edit),从数据库Articless表查找_id=postId的文章,检查账户权限，渲染到"article-edit.ejs"模板
+ post方式请求(/post/:postId/edit),从form表单获取数据,修改数据库Article表中对应文档，修改成功后默认返回到个人主页("/article-detail")

**6. commentRouter(路由为"localhost:8080/comment")**
+ get方式请求(/comment/delete/:commentId),从数据库Comments表查找_id=commentId,检查账户权限,删除该留言，删除成功后默认返回到个人主页("/article-detail")
+ post方式请求(/comment/:postId),从form表单获取数据,根据"models/Comment.js"新建留言到数据库Comments表中，创建成功后默认返回到个人主页("/article-detail")