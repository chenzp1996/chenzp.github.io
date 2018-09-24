window.onload=function (){
	var oDiv=document.getElementById("div1");
		oUl=oDiv.getElementsByTagName("ul")[0];
		oLi=oUl.getElementsByTagName("li");
		oImgl=document.getElementById('left');
		oImgr=document.getElementById('right');
		var speed=-2;
		oUl.innerHTML+=oUl.innerHTML;//让ul长度等于原来两倍，使第一张图片滑过时可以重新回到第一张
		oUl.style.width=oLi[0].offsetWidth*oLi.length+'px';//设置ul的长度等于所有li加起来的长度
		oa=document.getElementsByTagName("a");

	function move(){
		//当向左划到一半时，迅速回到起点
		if(oUl.offsetLeft<-oUl.offsetWidth/2){
			oUl.style.left='0';}
		//当向右划到一半时，迅速回到起点
		if(oUl.offsetLeft>0){
			oUl.style.left=-oUl.offsetWidth/2+'px';}

		oUl.style.left=oUl.offsetLeft+speed+'px';
	}

	var timer=setInterval(move,30);

	//鼠标移入停止
	oDiv.onmouseover=function(){
			clearInterval(timer);
	}
	//鼠标移出启动
	oDiv.onmouseout=function(){
			timer=setInterval(move,30);
	}
	//点击向左移动
	oa[0].onclick=function(){
		speed=-2;
	}
	//点击向右移动
	oa[1].onclick=function(){
		speed=2;
	}
};