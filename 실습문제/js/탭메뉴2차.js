/*$(".tab").on("click",function(){

    //tab에 있는 클래스 해제
    $(".tab").removeClass("tab-bc");

    //누른 tab에만 클래스 추가
    $(this).addClass("tab-bc");

    $(".sub").hide();
    $(".sub").eq($(this).index()).show();


});*/

// JS버전
const tabArr = document.getElementsByClassName("tab");
const subArr = document.getElementsByClassName("sub");

for(let i=0; i<tabArr.length; i++){
    tabArr[i].addEventListener("click",function(){
        subArr[i].style.display = "block";
    });
    
}