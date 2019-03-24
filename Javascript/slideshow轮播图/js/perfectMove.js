function startMove(obj, json) {
	clearInterval(obj.timer); //清除指定对象的定时器				
	obj.timer = setInterval(function () { //启动制定对象的定时器

		//var bStop=true;//假设所有元素都已到达目标值
		for (var attr in json) {
			var cur = 0;
			if (attr == 'opacity') {
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				cur = parseInt(getStyle(obj, attr));
			}

			var speed = (json[attr] - cur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if (attr == 'opacity') { //判断是否为透明度，是的话不需要加px
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + 'px';
			}
		}
	}, 30)
}

function getStyle(obj, name) {
	if (obj.style.styleFloat) {
		return obj.style.styleFloat; //ie下float处理
	} else if (obj.style.cssFloat) {
		return obj.style.cssFloat; //火狐等float处理
	}

	if (obj.currentStyle) { //IE有指定currentStyle
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name]; //标准浏览器可以通过getComputedStyle获取指定元素
	}
}