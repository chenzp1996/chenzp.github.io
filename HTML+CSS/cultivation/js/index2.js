var about_section = document.getElementById("about_section");
var service_section = document.getElementById("service_section");
var work_section = document.getElementById("work_section");
var news_section = document.getElementById("news_section");
var categories_container = document.getElementById("categories_container");

function addClass(element, className) {
    var oldClass = element.className;
    var classArray = oldClass.split(' ');
    if(classArray.indexOf(className) === -1){
        classArray.push(className);
    }
    else{
        return;
    }
    element.className = classArray.join(' ').trim();
};

function addAnimation(element,className){
    if(window.pageYOffset > element.offsetTop - window.innerHeight + element.clientHeight/2 ){
        addClass (element, className);
    }else{
        return;
    }
}
document.body.onscroll= function() {
    addAnimation(about_section,"about_section_move");
    addAnimation(service_section,"service_section_move");
    addAnimation(work_section,"work_section_move");
    addAnimation(news_section,"news_section_move");
    addAnimation(categories_container,"categories_move");
}

