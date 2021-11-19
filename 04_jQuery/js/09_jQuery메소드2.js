// remove(), detach(), empty()

// #test hover 이벤트 추가
// $(선택자).hover(function(){},function(){});
        // 마우스가  들어왔을때,  나왔을때

$("#test, .test3").hover(function(){
    // 마우스가 들어왔을때(mouseenter)
    $(this).css("backgroundColor","lime");
    $(this).children("span").text("hi");
},function(){
    // 마우스가 떠났을때 (mouseleave)
    $(this).css("backgroundColor","yellowgreen");
    $(this).children("span").text("안녕");
});

// remove 버튼 클릭시
$("#remove").on("click",function(){
    // $("#test").remove(); // 화면에서는 제거되지만 실제로는 반환되어짐. (잘라내기)
                         // -> 완전 제거되었으면 undefined가 반환 되었을 것이다.

    const temp = $("#test").remove();
    // 잘라낸 요소를 temp에 저장

    $("#div2").append(temp); // #div2의 자식으로 temp 자식추가
});

// detach 버튼 클릭시
$("#detach").on("click",function(){

    const temp = $("#test").detach();
    // 잘라낸 요소를 temp에 저장

    $("#div2").append(temp); // #div2의 자식으로 temp 자식추가
});

// empty 버튼 클릭시
$("#empty").on("click",function(){

    const temp = $("#test").empty();
    // 잘라낸 요소를 temp에 저장

});

// remove() : 요소 삭제에 많이 사용
// detach() : 화면 내 요소 이동에 많이 사용
// empty()  : 자식 요소 삭제에 많이 사용


/////////////////////////////////////////////

// clone

$("#clone").on("click",function(){

    // $("선택자").eq(index)
    // -> 선택된 다수의 요소 중 특정 index번쨰 요소 선택
    const clone = $("#div3").children().eq(0).clone(true); // #div3의 첫번째 자식 요소를 복제

    $("#div3").append(clone); // div3 마지막 자식으로 clone 복제
});


//////////////////////////////////////////

// 1. 배열 또는 다수의 요소를 순차 접근 하는 방식
// $.each(object, function([index, item]){this})

// ready() 함수
// $(document).ready(function(){});
$(function(){
    const arr = [
        {name : "윤정한", age : 27},
        {name : "최승철", age : 27},
        {name : "이찬", age : 23}
    ];

    $.each(arr, function(index, item){
        console.log(this.name);

        console.log(index+"번째 요소의 age : "+ arr[index].age);
        console.log(index+"번째 요소의 age : "+ item.age);
    });
});

//  2. 다수의 요소를 순차 접근 하는 방식
// $("선택자").each(function([index,item]){});
$(function(){
    $("li").each(function(index,item){
        // item == this == js 코드
        $(item).addClass("highlight-"+index);
    });
});