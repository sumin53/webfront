$("#all-box").on("click",function(){

    if($(this).prop("checked")==true){
        $(".allchk").prop("checked",true);
    }else{
        $(".allchk").prop("checked",false);
    }
});

$("#all-a").on("click",function(){
    if($(this).prop("checked")==true){
        $(".a-team").prop("checked",true);
    }else{
        $(".a-team").prop("checked",false);
    }
});

$("#all-b").on("click",function(){
    if($(this).prop("checked")==true){
        $(".b-team").prop("checked",true);
    }else{
        $(".b-team").prop("checked",false);
    }
});

$(".title").on("change",function(){

    if($("#all-a").prop("checked") && $("#all-b").prop("checked")){
        $("#all-box").prop("checked",true);
    }else{
        $("#all-box").prop("checked",false);
    }
});

$(".allchk").on("change",function(){
// ab팀 체크박스의 값이 변경 됐을경우

    $("#all-box").prop("checked",false);
    // 전체 체크박스가 해제가 된다.
    
    
    if($(this).hasClass("a-team")){
    // allchk에서 변경된것이 a팀이라면    
        $("#all-a").prop("checked",false);
        // a 전체 박스가 해제된다.
    }else if($(this).hasClass("b-team")){
    // allchk 해제된게 b-team이라면
        $("#all-b").prop("checked",false);
        // b 전체 박스 해제 된다.
    }

    if($(".a-team:checked").length == $(".a-team").length){
        $("#all-a").prop("checked",true);
    }

    if($(".b-team:checked").length == $(".a-team").length){
        $("#all-b").prop("checked",true);
    }

    if($(".allchk:checked").length == $(".allchk").length){
        $("#all-box").prop("checked",true);
    }

});

