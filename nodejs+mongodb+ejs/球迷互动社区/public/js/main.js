//检验邮箱账号格式是否输入正确
// $("input").blur(()=>{
//     console.log($(this).val());
// });
var emailReg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
$("input[name='email']").blur(function (e) { 
    e.preventDefault();
    // console.log($(this).val());
    if($(this).val() === ""){
        $(this).attr("placeholder","账号不能为空");
    }
    else if(!emailReg.test($(this).val())){
        // $(this).val() = "";
        $(this).attr("placeholder","请输入正确的邮箱账号");
    }
});;

//手动关闭警告框
$(".close").click(function(){
    $("#successAlert").alert();
    $("#errorAlert").alert();
});
//3s自动关闭警告框
setTimeout(()=>{
    $("#successAlert").alert("close");
    $("#errorAlert").alert("close");
},3000);


// 鼠标指到头像上弹出简介
$('[data-toggle="popover"]').hover(
    function () {
      $(this).popover("show");
    },
    function () {
      $(this).popover("hide");
    }
);
//留言弹窗
$(function () { $('#collapseOne').collapse({
    toggle: true
})});