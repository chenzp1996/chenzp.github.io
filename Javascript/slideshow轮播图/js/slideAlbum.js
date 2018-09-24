//通过类名获取任意元素，返回数组
function getByClass(oParent,sClass){
	var aEle=oParent.getElementsByTagName("*");
	var aResult=[];
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className==sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}


window.onload=function(){
	var oDiv=document.getElementById("playImages");

	var oPrev=getByClass(oDiv,'prev')[0];//左键
	var oNext=getByClass(oDiv,'next')[0];//右键

	var oLeft=getByClass(oDiv,'mark_left')[0];//大图左
	var oRight=getByClass(oDiv,'mark_right')[0];//大图右

	//获取小图的li
	var oDivS=getByClass(oDiv,'smallPic')[0];
	var oUlS=getByClass(oDivS,'smallUl')[0];
	var oLiS=oUlS.getElementsByTagName('li');

	//获取大图的li
	var oDivB=getByClass(oDiv,'bigPic')[0];
	var oLiB=oDivB.getElementsByTagName('li'); 

	var nowZindex=2;//图片层级，从2开始递增
	var now=0;//li列表索引位置

// 左右按钮
	oPrev.onmouseover=oLeft.onmouseover=function(){
		startMove(oPrev,{'opacity':'100'});
	}

	oPrev.onmouseout=oLeft.onmouseout=function(){
		startMove(oPrev,{'opacity':'0'});
	}

	oNext.onmouseover=oRight.onmouseover=function(){
		startMove(oNext,{'opacity':'100'});
	}

	oNext.onmouseout=oRight.onmouseout=function(){
		startMove(oNext,{'opacity':'0'});
	}

//点击小图，大图切换
	for(var i=0;i<oLiS.length;i++){
		oLiS[i].index=i;
		oLiS[i].onclick=function(){
			if(this.index==now) 
				{return;}
			else{
				now=this.index;	
				tab();}
		}

//鼠标移入小图标变不透明	
		oLiS[i].onmouseover=function(){
			startMove(this,{'opacity':100});
		}

		oLiS[i].onmouseout=function(){
			if(this.index!=now){
				startMove(this,{'opacity':60});
			}
		}
	}

	//图片向下播放！！！重点
	function tab(){
		oLiB[now].style.height=0;
		
		oLiB[now].style.zIndex=nowZindex++;

		startMove(oLiB[now],{'height':350});

		for(var i=0;i<oLiS.lenght;i++){
			startMove(oLiS[i],{'opacity':60});
		}

		startMove(oLiS[now],{'opacity':100});

		//让图片移动到中间（到边界时除外）
		if (now == 0) {             
            startMove(oUlS, {'left':0});         
        }
        else if (now == oLiS.length - 1) {             
            startMove(oUlS,{'left' :(-(now - 2) *  oLiS[0].offsetWidth)});         
        }
        else {             
            startMove(oUlS, {'left' :(-(now - 1) * oLiS[0].offsetWidth)});         
        }  
	}	
//点击左右按钮小图轮换getStyle(oLIS[0],'width')
	oPrev.onclick=function (){
		now--;
		if(now==-1){
			now=oLiS.length-1;
		}
		tab();
	}
		
	oNext.onclick=function (){
		now++;
		if(now==oLiS.length){
			now=0;
		}
		tab();
	}

//图片自动轮播

	var timer=setInterval(oNext.onclick,1000);
	//移入停止定时器
	oDiv.onmouseover=function(){
		clearInterval(timer);
	}
	//移出开启定时器
	oDiv.onmouseout=function(){
		timer=setInterval(oNext.onclick,1000);
	}

}
