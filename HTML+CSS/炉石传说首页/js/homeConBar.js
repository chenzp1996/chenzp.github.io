$(document).ready(function(){
	
//	$(".deviceIcon1").click(function(){
//		$(this).addClass("deviceIcon1_click");
//		$(this).removeClass("deviceIcon1_original");
//		$(this).removeClass("deviceIcon1_hover");
//		
//		$(".deviceIcon2").addClass("deviceIcon2_original");
//		$(".deviceIcon2").addClass("deviceIcon2_hover");
//		$(".deviceIcon2").removeClass("deviceIcon2_click");
//		
//		$(".deviceIcon3").addClass("deviceIcon3_original");
//		$(".deviceIcon3").addClass("deviceIcon3_hover");
//		$(".deviceIcon3").removeClass("deviceIcon3_click");
//	});
//	$(".deviceIcon2").click(function(){
//		$(this).addClass("deviceIcon2_click");
//		$(this).removeClass("deviceIcon2_original");
//		$(this).removeClass("deviceIcon2_hover");
//		
//		$(".deviceIcon1").addClass("deviceIcon1_original");
//		$(".deviceIcon1").addClass("deviceIcon1_hover");
//		$(".deviceIcon1").removeClass("deviceIcon1_click");
//		
//		$(".deviceIcon3").addClass("deviceIcon3_original");
//		$(".deviceIcon3").addClass("deviceIcon3_hover");
//		$(".deviceIcon3").removeClass("deviceIcon3_click");
//	});
//	$(".deviceIcon3").click(function(){
//		$(this).addClass("deviceIcon3_click");
//		$(this).removeClass("deviceIcon3_original");
//		$(this).removeClass("deviceIcon3_hover");
//		
//		$(".deviceIcon2").addClass("deviceIcon2_original");
//		$(".deviceIcon2").addClass("deviceIcon2_hover");
//		$(".deviceIcon2").removeClass("deviceIcon2_click");
//		
//		$(".deviceIcon1").addClass("deviceIcon1_original");
//		$(".deviceIcon1").addClass("deviceIcon1_hover");
//		$(".deviceIcon1").removeClass("deviceIcon1_click");
//	});
/*---------------下载区域按钮选择  以下---------------*/
	$(".deviceIcon1").click(function(){
		whoBeClick(1,2,3);
		$(".IOS_QRcode").css("display","none");
		$(".Android_QRcode").css("display","none");
		
	});
	$(".deviceIcon2").click(function(){
		whoBeClick(2,1,3);
		$(".IOS_QRcode").css("display","block");
		$(".Android_QRcode").css("display","none");
	});
	$(".deviceIcon3").click(function(){
		whoBeClick(3,1,2);
		$(".IOS_QRcode").css("display","none");
		$(".Android_QRcode").css("display","block");
	});
/*---------------下载区域按钮选择 以上---------------*/	

//	$(".bot1_icon_r").click(function(){
//		var esportCon_left=$(".esportCon").css("left");
//		var length=esportCon_left.length;
//		if(length==3){
//			var temp_str=esportCon_left.slice(0,1);
//			Number(temp_str);
//			temp_str-=244;
//			console.log(temp_str);
//			var change_left=-244+"px";
//			$(".esportCon").css("left","-244px");
//			console.log($(".esportCon").css("left"));
//			$("#clearFix").css("top","-16px");
//			$(".esportCon").addClass("esportCon_right");
//		}
//		else{			
//			var temp_str=esportCon_left.slice(0,4);
//			Number(temp_str);
//			temp_str-=244;
//			console.log(temp_str);
//			$(".esportCon").css("left:",temp_str+"px");
//			console.log($(".esportCon").css("left:",temp_str+"px"));
//		}
//	});
	
	
});
	//被点击的按钮=num1，另外两个按钮=num2、num3
	function whoBeClick(num1,num2,num3){
		$(".deviceIcon"+num1).addClass("deviceIcon"+num1+"_click");
		$(".deviceIcon"+num1).removeClass("deviceIcon"+num1+"_original");
		$(".deviceIcon"+num1).removeClass("deviceIcon"+num1+"_hover");
		
		$(".deviceIcon"+num2).addClass("deviceIcon"+num2+"_original");
		$(".deviceIcon"+num2).addClass("deviceIcon"+num2+"_hover");
		$(".deviceIcon"+num2).removeClass("deviceIcon"+num2+"_click");
		
		$(".deviceIcon"+num3).addClass("deviceIcon"+num3+"_original");
		$(".deviceIcon"+num3).addClass("deviceIcon"+num3+"_hover");
		$(".deviceIcon"+num3).removeClass("deviceIcon"+num3+"_click");
		
		$(".clientDownload").addClass("clientDownload_"+num1);
		$(".clientDownload").removeClass("clientDownload_"+num2);
		$(".clientDownload").removeClass("clientDownload_"+num3);
	}