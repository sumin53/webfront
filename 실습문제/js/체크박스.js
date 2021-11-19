const aList = $("input[name |= 'a']");
const bList = $("input[name |= 'b']");

const checkedList = [];
const unCheckedList = [];

$("#all-box").on("change",function(){
    
    if($(this).prop("checked") == true){
        aList.prop("checked",true);
        bList.prop("checked",true);
        $("#all-a").prop("checked",true);
        $("#all-b").prop("checked",true);
    }else{
        aList.prop("checked",false);
        bList.prop("checked",false);
        $("#all-a").prop("checked",false);
        $("#all-b").prop("checked",false);
    }

});

//a팀만 전체 체크
$("#all-a").on("change",function(){
    if($(this).prop("checked") == true){
        aList.prop("checked",true);
    }else{
        aList.prop("checked",false);
    }
});

//b팀만 전체 체크
$("#all-b").on("click",function(){
    if($(this).prop("checked")){
        bList.prop("checked",true);
    }else{
        bList.prop("checked",false);
    }
});

//a팀 b팀 전체 체크 부분 제어하기
$(".title").on("change",function(){
    if($("#all-a").prop("checked") && $("#all-b").prop("checked")){
        $("#all-box").prop("checked",true);
    }

    if($(this).prop("checked") == false){
        $("#all-box").prop("checked",false);
    }
});

$(".all").on("change",function(){

    if(!$(this).prop("checked")){ //하나라도 체크가 해제됬다면
        $("#all-box").prop("checked",false);

        if($(this).hasClass("a-box")){
            $("#all-a").prop("checked",false);
        }else if($(this).hasClass("b-box")){
            $("#all-b").prop("checked",false);
        }
    }

    if($(".a-box:checked").length == $(".a-box").length){
        $("#all-a").prop("checked",true);
    }

    if($(".b-box:checked").length == $(".b-box").length){
        $("#all-b").prop("checked",true);
    }

    if($(".all:checked").length == $(".all").length){
        $("#all-box").prop("checked",true);
    }

});




