// 요소에 내용 또는 값 얻어오기/세팅하기
document.getElementById("btn1").addEventListener("click",function(){
    console.log($("#area").text());
    console.log($("#area").html());

    // #area 내부 내용 초기화
    //document.getElementById("area").innerHTML = ""; //js
    $("#area").html(""); // jQuery
    $("#area").html("<h3>새롭게 생성된 요소</h3>"); // jQuery
});


// 요소 생성, 속성 추가, html 화면 삽입

// 박스 추가
let count = 1;

$("#add1").on("click",function(){
    
    // 1) div 요소 생성
    const div = $("<div>");

    //  2) 생성된 div 요소에 box class 추가
    div.attr("class","box");

    // 3) div에 숫자 추가
    div.text(count++);

    // 4) #base의 마지막 자식으로 추가
    $("#base").append(div);
});


// 버튼 추가
$("#add2").on("click",function(){

    // 1) 버튼 요소 생성
    const btn = $("<button>"); // 시작태그만 적어도 종료 태그도 같이 생성된다.

    // 2) 클래스 추가
    btn.attr("class","box");
    // btn.attr("class","btn"); // 앞서 작성된 box 클래스 추가 내용을 덮어씀

    // *****************************
    btn.addClass("btn"); // addClass("클래스명") : 클래스 추가
                         // <-> removeClase("클래스명") : 일치하는 클래스명 속성값만 제거
    // *****************************

    // 3) btn에 숫자 추가
    btn.text(count++);

    // 4) #base의 첫번째 자식으로 추가
    $("#base").prepend(btn);

});


$('#add3').on("click",function(){
    
    // 1) input 요소 생성
    const input = $("<input>");

    // 2) type="checkbox"추가
    input.attr("type","checkbox");

    // 3) 체크가 되어 있는 상태로 만들기
    // input.attr("checked","checked");
    input.prop("checked",true);

    // 4) #base의 마지막 자식으로 추가
    input.appendTo($("#base"));
});

$("#add4").on("click",function(){
    // 1) div 요소 생성
    const div = $("<div>");
    // 2) 클래스 before 추가
    div.addClass("before");
    // 3) #base의 이전 형제 요소로 삽입
    $("#base").before(div);
});

$("#add5").on("click",function(){
    // 1) div 요소 생성
    const div = $("<div>");
    // 2) 클래스 before 추가
    div.addClass("after");
    // 3) #base의 다음 형제 요소로 삽입
    div.insertAfter($("#base"));

    //$("<div class='after'>").insertAfter($("#base"));
});