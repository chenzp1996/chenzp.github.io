// for(let i=1;i<7;i++){
//     $(".tiler"+i).hover(function(){
//         $(".view"+i+" span[class^='part']").css("transform","translateZ(-30px)");
//         $(".view"+i+" span[class^='part']").css("opacity","1");
//         },
//         function(){
//         $(".view"+i+" span[class^='part']").css("transform","translateZ(0px)");
//         $(".view"+i+" span[class^='part']").css("opacity","0");
//     });
// }

$(document).mousemove(function (e) {
    //检测鼠标在哪个图标上
    var x = e.clientX - $(".tiler1").offset().left;
    var y = e.clientY - $(".tiler1").offset().top;

    if (x >= 0 && x <= 250 && y >= 0 && y <= 200) {
        $(".view1" + " span[class^='part']").css("transform", "translateZ(-30px) scale(1)");
        $(".view1" + " span[class^='part']").css("opacity", "1");
    } else {
        $(".view1" + " span[class^='part']").css("transform", "translateZ(0px) scale(0)");
        $(".view1" + " span[class^='part']").css("opacity", "0");
    }
    if (x >= 251 && x <= 500 && y >= 0 && y <= 200) {
        $(".view2" + " span[class^='part']").css("transform", "translateZ(-30px) scale(1)");
        $(".view2" + " span[class^='part']").css("opacity", "1");
    } else {
        $(".view2" + " span[class^='part']").css("transform", "translateZ(0px) scale(0)");
        $(".view2" + " span[class^='part']").css("opacity", "0");
    }
    if (x >= 501 && x <= 725 && y >= 0 && y <= 200) {
        $(".view3" + " span[class^='part']").css("transform", "translateZ(-30px) scale(1)");
        $(".view3" + " span[class^='part']").css("opacity", "1");
    } else {
        $(".view3" + " span[class^='part']").css("transform", "translateZ(0px) scale(0)");
        $(".view3" + " span[class^='part']").css("opacity", "0");
    }
    if (x >= 0 && x <= 250 && y >= 200 && y <= 400) {
        $(".view4" + " span[class^='part']").css("transform", "translateZ(-30px) scale(1)");
        $(".view4" + " span[class^='part']").css("opacity", "1");
    } else {
        $(".view4" + " span[class^='part']").css("transform", "translateZ(0px) scale(0)");
        $(".view4" + " span[class^='part']").css("opacity", "0");
    }
    if (x >= 251 && x <= 500 && y >= 200 && y <= 400) {
        $(".view5" + " span[class^='part']").css("transform", "translateZ(-30px) scale(1)");
        $(".view5" + " span[class^='part']").css("opacity", "1");
    } else {
        $(".view5" + " span[class^='part']").css("transform", "translateZ(0px) scale(0)");
        $(".view5" + " span[class^='part']").css("opacity", "0");
    }
    if (x >= 501 && x <= 750 && y >= 200 && y <= 400) {
        $(".view6" + " span[class^='part']").css("transform", "translateZ(-30px) scale(1)");
        $(".view6" + " span[class^='part']").css("opacity", "1");
    } else {
        $(".view6" + " span[class^='part']").css("transform", "translateZ(0px) scale(0)");
        $(".view6" + " span[class^='part']").css("opacity", "0");
    }

    // function change(){
    //     for(let i=0,j=0;i<3 && j<2;i++,j++){
    //         if (x >= 250*i && x <= 250*(i+1) && y >= 200*j && y <= 200*(j+1)) {
    //             $(".view6" + " span[class^='part']").css("transform", "translateZ(-30px) scale(1)");
    //             $(".view6" + " span[class^='part']").css("opacity", "1");
    //         } else {
    //             $(".view6" + " span[class^='part']").css("transform", "translateZ(0px) scale(0)");
    //             $(".view6" + " span[class^='part']").css("opacity", "0");
    //         }
    //     }
    // }
    // function change() {
    //     for (let i = 1; i < 3; i++) {
    //         for (let j = 1; j < 4; j++) {
    //             if (x >= 250 * (j-1) && x <= 250 * j && y >= 200 * (i-1) && y <= 200 * i) {
    //                 $(".view" + i*j + " span[class^='part']").css("transform", "translateZ(-30px) scale(1)");
    //                 $(".view" + i*j + " span[class^='part']").css("opacity", "1");
    //             } else {
    //                 $(".view" + i*j + " span[class^='part']").css("transform", "translateZ(0px) scale(0)");
    //                 $(".view" + i*j + " span[class^='part']").css("opacity", "0");
    //             }
    //         }
    //     }

    // }

    // change();

});