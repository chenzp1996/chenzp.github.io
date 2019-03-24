//
//function startmove(element,cssname,offset){
//		var eleHeight,winScrollTop,winHeight,temp;
//		//元素距离窗口顶部高度，滚动距离，窗口高度
//		eleHeight=$(element).offset().top;
//		temp=eval(eleHeight+offset);
////		winScrollTop=$(window).scrollTop();
////		winHeight=$(window).height();
////		console.log(eleHeight,winScrollTop,winHeight);
//		console.log(eleHeight);
////		if(winScrollTop+winHeight>temp){
////			$((element)).addClass((cssname));
////		}
//	}
//
//$(document).ready(function (e) {
//	startmove("#cateBox","cateBoxmove",0);
//	 $(window).scroll(function () {
//          startmove("#cateBox","cateBoxmove",0);
//      });
//});