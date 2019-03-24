var treasureMap = document.querySelector(".treasureMap");
var treasure = document.querySelector(".treasure");
var info = document.querySelector(".info");
var startGame = document.querySelector(".startGame");


var treasureX,//宝藏位置
    treasureY,
    clickX,//鼠标点击位置
    clickY;
var grade = 0;//点击次数
var canClick;//能否点击宝图

//开始游戏随机产生宝藏位置
function getTrePos() {
    treasureX = Math.floor(Math.random() * 550);
    treasureY = Math.floor(Math.random() * 550);
    treasure.style.left = treasureX + "px";
    treasure.style.top = treasureY + "px";
}

startGame.onclick = function () {
    //删除所有 X 节点
    var allcha = document.querySelectorAll(".treasureMap img");
    for(var i = 0;i<allcha.length;i++){
        treasureMap.removeChild(allcha[i]);
    }
    //初始化
    info.innerText = "提示：游戏已开始，请开始点击地图";
    startGame.innerText = "请点击地图！";
    getTrePos();
    treasure.style.display = "none";
    grade = 0;
    canClick = true;
    
}

treasureMap.onclick = function (ev) {
    if (canClick === true) {
        //计算鼠标点击位置
        clickX = ev.clientX - treasureMap.offsetLeft;
        clickY = ev.clientY - treasureMap.offsetTop;
        //计算点击位置和宝藏的距离
        var distance = Math.sqrt(Math.pow(((treasureX + treasure.clientWidth / 2) - clickX), 2) + Math.pow(((treasureY + treasure.clientHeight / 2) - clickY), 2));
        grade++;//点击次数加1
        
        //根据距离给出不同提示
        if (distance <= 50) {
            startGame.innerText = "重新开始";
            canClick = false;
            treasure.style.display = "block";
            info.innerText = "提示：恭喜你挖到宝藏！！！点击次数为:" + grade;
        } else if (distance > 50 && distance <= 100) {
            missTarget();
            info.innerText = "提示：快接近了！快挖！！！点击次数：" + grade;
        } else if (distance > 100 && distance <= 200) {
            missTarget();
            info.innerText = "提示：还有一点距离哦！！！点击次数：" + grade;
        } else if (distance > 200 && distance <= 300) {
            missTarget();
            info.innerText = "提示：距离有点远哦！！！点击次数：" + grade;
        } else {
            missTarget();
            info.innerText = "提示：太远了！！！点击次数：" + grade;
        }
    }
}
//未命中则添加X图片节点
function missTarget() {
    var imgNode = document.createElement("img");
    imgNode.setAttribute("src", "./images/cha.png");
    treasureMap.appendChild(imgNode);
    imgNode.style.left = clickX - 16 + "px";
    imgNode.style.top = clickY - 16 + "px";
}