		function showPic(whichPic){
			//检查是否存在placeholder元素
			if (!document.getElementById("placeholder")) return false;
			var source=whichPic.getAttribute("href");
			var placeholder= document.getElementById("placeholder");
			placeholder.setAttribute("src",source);
			//检查是否存在description元素
			if(document.getElementById("description")){
				var text=whichPic.getAttribute("title") ? whichPic.getAttribute("title"):"";
				var description=document.getElementById("description");
				if(description.firstChild.nodeType==3){
				description.firstChild.nodeValue=text;
				}
			}
			return true;
		}

		window.onload=prepareGallery;

		function prepareGallery(){
			if(!document.getElementById) return false;
			if(!document.getElementsByTagName) return false;
			if(!document.getElementById("imageGallery")) return false;
			var gallery=document.getElementById("imageGallery");
			var links=gallery.getElementsByTagName("a");
			for (var i = 0; i<links.length; i++) {
				links[i].onclick=function(){
					showPic(this);
					return false;
				}
			}
		}

		 var gallery=document.getElementById("imageGallery");
		 gallery.parenNode.insertBefore(placeholder,gallery);