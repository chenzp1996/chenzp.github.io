function startMove(element,cssname,offset){
	var eleTop,winScrollTop,winHeight,addHeight;
	//元素距离上窗口边高度，滚动距离，窗口高度，补充距离
	eleTop=$(element).offset().top;
//	console.log(eleTop);
	addHeight=eval(offset+eleTop);
	winScrollTop=$(window).scrollTop();
	winHeight=$(window).height();
//	console.log(eleTop,winScrollTop,winHeight);
	if((winScrollTop+winHeight)>addHeight){
		$(element).addClass(cssname);
	}
}

//拉动滚动条的时候开始调用函数
	$(window).scroll(function(){
		//about_section
		startMove("#about_section_img","about_img_move",0);
		startMove("#p1","about_section_p1_move",20);
		startMove("#p2","about_section_p2_move",-200);
		
		//service_grids
		startMove("#grids1","grids1",55);
		startMove("#grids2","grids2",-1935);
		startMove("#grids3","grids3",55);
		
		//work_section
		startMove("#work_section","work_section_move",200);
		startMove(".work_h1","work_h1_move",200)
		//news_section
		startMove("#span1","news_span1_move",150);
		startMove("#span2","news_span2_move",150);
		startMove("#span3","news_span3_move",150);
		
		//categories_section
		startMove("#container","categories_move",150);
		
		//footer_section
//		startMove("#icon1","icon_move",20);
	});

