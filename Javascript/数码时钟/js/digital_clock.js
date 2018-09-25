window.onload=function(){
	var year_month_dayA=document.getElementsByClassName("ymd");
	    timeA=document.getElementsByClassName("time");
		weekA=document.getElementsByClassName("week");
	//让时分秒都是双位数
	function toDouble(t){
		if (t<10) {
			return "0"+t;
		}
		else{
			return ""+t;
		}
	}
	
	function tick(){
		var oDate=new Date();//获取本地时间
			//以字符串的形式保存时间
			t=toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds());//将时分秒保存在str中
		 	ymd=toDouble(oDate.getFullYear())+toDouble(oDate.getMonth()+1)+toDouble(oDate.getDate());
			
			day=oDate.getDay();//获取星期
			switch(day){
				case 1:weekA[0].src='./images/one.png';break;
				case 2:weekA[0].src='./images/two.png';break;
				case 3:weekA[0].src='./images/'+day+'.png';break;
				case 4:weekA[0].src='./images/'+day+'.png';break;
				case 5:weekA[0].src='./images/'+day+'.png';break;
				case 6:weekA[0].src='./images/'+day+'.png';break;
				case 0:weekA[0].src='./images/'+day+7+'.png';break;
			}
			
		 	//console.log(w);
		for(var i=0;i<year_month_dayA.length;i++)
		{
			//
			year_month_dayA[i].src='./images/'+ ymd.charAt(i)+'.png';

			if(i<timeA.length){
				timeA[i].src='./images/'+ t.charAt(i)+'.png';
			}
		}
		//if(var i<7)
	}
	
	setInterval(tick,1000);
	tick();
}


