$(".btn").on("click",function(){

    $(".btn").removeClass("select-tab");
    $(this).addClass("select-tab");

    $(".sub").hide();
    $(".sub").eq($(this).index()).show();

});