## promise ##
#### promise可以看成一个容器，保存着一些未来才会结束的事件的结果。从语法上看，promise是一个对象，可以将异步操作以同步操作的流程表达出来，避免了ES5中回调函数的层层嵌套。 ####

1. Promise的状态:
    * pending(进行中)
    * fulfilled(已完成)
    * rejected(已失败)
2. Promise的特点:
    * 对象的状态不受外界影响，只有异步执行的结果才可以决定其状态。
    * 对象的状态一旦改变，不会在修改。Promise对象的状态改变只有两种：pending —> fulfilled、pending —> rejected
3. Promise的基本用法:
   //getData用来获取数据，函数返回一个Promise对象
   `var getData(()=>{`
&emsp;&emsp;`return new Promise((resolve,reject)=>{);`
&emsp;&emsp;&emsp;&emsp;`if(//异步请求成功){`
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`resolve(successResult)`
&emsp;&emsp;&emsp;&emsp;`}else{`
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`reject(error)`
&emsp;&emsp;&emsp;&emsp;`}`
&emsp;&emsp;`}`
   `})`
    <br />
    //异步执行状态改变后的结果
    `getData().then((successresult)=>{`
&emsp;&emsp;`console.log(successresult)`
    `},(error)=>{`
&emsp;&emsp;`console.log(error)`
    `)`
    //或写成
    `getData().then((successresult)=>{`
&emsp;&emsp;`console.log(successresult)`
    `}).catch((error)=>{`
&emsp;&emsp;`console.log(error)`
    `})`
4. Promise常用方法
    * Promise.all() //可用来包装多个Promise实例
        * `const p = Promise.all([p1,p2,p3]);`
        * 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
        * 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
    * Promise.race() //竞速，可用来包装多个Promise实例
        * const p = Promise.race([p1, p2, p3]);
        * 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数