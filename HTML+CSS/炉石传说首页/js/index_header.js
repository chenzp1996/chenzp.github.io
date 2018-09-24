$(document).scroll(function(){
	
	/*---------导航条到达顶部固定---------*/
	var clearFixTop;//获取clearFix距离顶部的高度
	if(clearFixTop=$(window).scrollTop()>=256){
//		console.log(clearFixTop);
		$("#clearFix").css("position","fixed");
		$("#clearFix").css("top","-16px");
		$(".barBtn_li3").css("display","block")
	}else{
		$("#clearFix").css("position","");
		$(".barBtn_li3").css("display","none")
	}
	/*----------导航条到达顶部固定----------*/
});


$(window).ready(function(){
	var flag=2;
	var f;
	$(".Navbar-items_a1").click(function(){
		f=1;
		tagTurn(f);
	});
	$(".Navbar-items_a2").click(function(){
		f=2;
		tagTurn(f);
	});
	$(".Navbar-items_a3").click(function(){
		f=3;
		tagTurn(f);
	});
	
	/*函数功能：被点转换箭头方向*/
	function tagTurn(f){
		if(flag==2){
			$(".tag"+f).addClass("Navbar_container_tag2");
			$(".tag"+f).css("background-position","-146px -144px");
			flag=1;
		}
		else{
			$(".tag"+f).addClass("Navbar_container_tag1");
			$(".tag"+f).css("background-position","-146px -130px");
			flag=2;	
		}
	}
	

	$(".Navbar-items_a1").click(function(){
		$(".shadow").removeClass("shadow_change");
		$(".Navbar_modalContent").removeClass("Navbar_modalContent_move");
		$(".mC_li_a").removeClass("li_move");
		$(".userReg").removeClass("userReg_move");
		$(".shadow").addClass("shadow_change");
		$(this).addClass("Navbar-items_a_change");
		$(".Navbar-items_a2").removeClass("Navbar-items_a_change");
		$(".Navbar-items_a3").removeClass("Navbar-items_a_change");
		
		if(($(".Navbar_gamePublishers").css("visibility")=="hidden")&&($(".Navbar_gamePublishers").css("opacity")=="0")){
			for(var i=1;i<7;i++){
				var time=i*0.03;
				$(".gameLogoImage"+i).css("transition-delay",time+"s");
			}
			
			$(".Navbar_gamePublishers").addClass("Navbar_gamePublishers_move");
			$(".gameLogoImage").addClass("li_move");
		}	
		else{
			$(".shadow").removeClass("shadow_change");
			$(".Navbar_gamePublishers").removeClass("Navbar_gamePublishers_move");
			$(".gameLogoImage").removeClass("li_move");
			$(this).removeClass("Navbar-items_a_change");
			
		}
	
	});
	
	
	$(".Navbar-items_a2").click(function(){
		$(".Navbar-items_a1").removeClass("Navbar-items_a_change");
		$(".Navbar-items_a3").removeClass("Navbar-items_a_change");
		$(".Navbar_gamePublishers").removeClass("Navbar_gamePublishers_move");
		$(".gameLogoImage").removeClass("li_move");
		$(".userReg").removeClass("userReg_move");
		$(".shadow").removeClass("shadow_change");
		$(".shadow").addClass("shadow_change");
		$(this).addClass("Navbar-items_a_change");
		if(($(".Navbar_modalContent").css("visibility")=="hidden")&&($(".Navbar_modalContent").css("opacity")=="0")){
			for(var i=1;i<6;i++){
				var time=i*0.02;
				$(".mC_li_a"+i).css("transition-delay",time+"s");
			}

			$(".Navbar_modalContent").addClass("Navbar_modalContent_move");
			$(".mC_li_a").addClass("li_move");
			$(".Navbar_gameMenu").addClass("Navbar_gameMenu_move");
		}	
		else{
			$(".shadow").removeClass("shadow_change");
			$(".Navbar_modalContent").removeClass("Navbar_modalContent_move");
			$(".mC_li_a").removeClass("li_move");
			$(".Navbar_gameMenu").removeClass("Navbar_gameMenu_move");
			$(this).removeClass("Navbar-items_a_change");
		}
		
	});
	
	
	$(".Navbar-items_a3").click(function(){
		$(".Navbar-items_a1").removeClass("Navbar-items_a_change");
		$(".Navbar-items_a2").removeClass("Navbar-items_a_change");
		$(".Navbar_gamePublishers").removeClass("Navbar_gamePublishers_move");
		$(".gameLogoImage").removeClass("li_move");
		$(".Navbar_modalContent").removeClass("Navbar_modalContent_move");
		$(".mC_li_a").removeClass("li_move");
		$(".shadow").addClass("shadow_change");
		$(this).addClass("Navbar-items_a_change");
		if(($(".userReg").css("visibility")=="hidden")&&($(".userReg").css("opacity")=="0")){
			$(".userReg").addClass("userReg_move");
		}	
		else{
			$(".userReg").removeClass("userReg_move");
			$(".shadow").removeClass("shadow_change");
			$(this).removeClass("Navbar-items_a_change");
			
		}
	});
	
	
	$(".wraper").click(function(){
		$(".shadow").removeClass("shadow_change");
	});
	
	
});