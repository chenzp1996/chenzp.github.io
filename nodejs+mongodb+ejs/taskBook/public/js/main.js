$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var h5HTML = button.closest("li").find("h5").html();
    var recipient = button.data('liid');
    console.log(recipient);
    
    var modal = $(this)
    // console.log(modal);
    modal.find('.modal-body input').val(h5HTML)
    modal.find("form.modal-body").attr("action","/edit/"+recipient)
});

$(".panel-footer span mark").eq(0).text($(".list-group li").length);
$(".panel-footer span mark").eq(1).text($(".list-group li.lifinashed").length);
$(".panel-footer span mark").eq(2).text($(".list-group li").length-$(".list-group li.lifinashed").length);
