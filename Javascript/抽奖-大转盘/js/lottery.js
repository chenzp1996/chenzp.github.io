var pointer = document.querySelector(".pointer");
var turntable = document.querySelector(".turntable");

var grade,
    info;

function getGrade() {
    var randomNum = Math.floor(Math.random() * 100);

    if (randomNum > 0 && randomNum <= 3) {
        return {
            grade : 1,
            info : "恭喜你，获得一等奖！"
        };
    }else if(randomNum > 3 && randomNum <= 10){
        return {
            grade : 2,
            info : "恭喜你，获得二等奖！"
        };
    }else if(randomNum > 10 && randomNum <= 20){
        return {
            grade : 3,
            info : "恭喜你，获得三等奖！"
        };
    }else if(randomNum > 20 && randomNum <= 35){
        return {
            grade : 4,
            info : "恭喜你，获得四等奖！"
        };
    }else if(randomNum > 35 && randomNum <= 55){
        return {
            grade : 5,
            info : "恭喜你，获得五等奖！"
        };
    }else if(randomNum > 55 && randomNum <= 80){
        return {
            grade : 6,
            info : "恭喜你，获得六等奖！"
        };
    }else if(randomNum > 80 && randomNum <= 100){
        return {
            grade : 7,
            info : "未中奖，再接再厉哦！"
        };
    }
}

var canClick = true;
pointer.onclick = function (){
    if(canClick === true){
        var g = getGrade();
        var angle = (360/7)*(g.grade-1) + 30;
        turntable.style.transition = "all 3s";
        turntable.style.transform = "rotate(" + (1080 + angle) + "deg)";
        canClick = false;
    }

    var timer = setTimeout(function(){
        turntable.style.transition = "all 0s";
        turntable.style.transform = "rotate(" + angle + "deg)";
        canClick = true;
        alert(g.info);
    },3000);
};