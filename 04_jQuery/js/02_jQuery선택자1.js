// ****** (경고) ******
// js와 jQuery 요소 선택 방법에 따라서
// 뒤에 작성되는 코드 방식이 결정된다.

// js방식 요소선택 -> js 코드 작성
// jQuery방식 요소 선택 -> jQuery 코드 작성
// (서로 섞어서 사용되어지지 못한다.)
// -> 한줄에 js, jQuery 혼용x
// -> 서로 다른 줄에 각각 사용 o


//태그 선택자 확인
$(document).ready(function(){
          //jQuery

    //jQuery는 javascript로 만들어진 라이브러리이다.
    // == jQuery는 js코드이다.
    // == jQuery와 js는 혼용이 가능하다.

    //[js]
    const arr1 = document.getElementsByTagName("h5");
    console.log(arr1);

    // arr1은 h5요소를 묶어둔 배열이기 때문에
    // for문으로 하나씩 접근하여 다루어야 한다.

    for(let h5 of arr1){
        h5.style.backgroundColor ="yellowgreen";
    }

    // h5 요소 글자색 흰색
    for(let h5 of arr1){
      h5.style.color = "white";
    }

    //p 요소 글자색 흰색
    for(let p of document.getElementsByTagName("p")){
        p.style.color = "white";
    }


    //[jQuery]
    const arr2 = $("p");
    console.log(arr2);

    $(arr2).css("backgroundColor","skyblue");
    // jQuery 선택자를 이용하면 동시에 여러 요소를 선택하여 배열로 반환되는 경우에도
    // for문 없이 한번에 다룰 수 있다.

    $("p,h5").css("fontSize","30px");
});


// 클래스 선택자
$(function(){ // ready() : 문서가 로딩이 완료된 후

    // [JS]
    // 클래스가 item인 요소의 글자색을 "orange"로 변경
    const arr = document.getElementsByClassName("item");

    for(let h3 of arr){
        h3.style.color = "orange";    
    }

    // [jQuery]
    $(".select").css("backgroundColor","gray");

    // 클래스 item, select를 모두 가진 요소의 글자 크기를 30px로 변경
    $('.item.select').css("font-size","30px");

    // css표기법 : font-size
    // js 표기법 : fontSize
    // jQuery 표기법 : fontSize 또는 font-size
});

// 아이디 선택자
$(document).ready(function(){
    // $(요소).on("이벤트",이벤트 핸들러): 지정된 요소에 이벤트 리스너를 추가
    // 요소.addEventListener()와 같은 동작
    // 단 요소 선택 방법에 차이가 있음.

    $("#input1").on("input",function(){

        // input 태그 값 얻어오기
        // console.log(this.value); // js 방식
        // console.log($(this).val()); // jQuery 방식
        
        // 정규표현식 작성
        const regExp = /^[A-Z][a-z\d\!\@\#]{7,19}$/;

        if(regExp.test($(this).val())){

            // innerText == text()
            
            // [JS]
            // document.getElementById("result").innerText = "유효";

            // jQuery
            $("#result").text("유효");
            $("#result").css("color","green");
        }else{
            $("#result").text("무효");
            $("#result").css("color","red");
        }
    });

});

// 자식 , 후손 선택자
$(function(){ // ready() 함수

    // area 클래스가 자식 중 h4 태그의 글자색을 red로 설정
    $(".area > h4").css("color","red");

    // area 클래스 자식 중 ul 태그의 자식 중
    // 클래스가 cls인 요소 배경색을 tomato 색으로 설정
    $(".area > ul > .cls").css("backgroundColor","tomato");

    // 오렌지, 멜론, 두리안 글자 크기를 30px
    $(".area .cls").css("fontSize","30px");

    // 사과인 요소를 선택하여
    // 배경색을 red, 글자색을 white로 변경

    // 메소드 체이닝(method chaining)
    $(".area > ul h4").css("backgroundColor","red").css("color","white");
});

// 기본 속성 선택자
$(document).ready(function(){
    
    //확인버튼이 클릭되었을때
    $("#check").on("click",function(){
        // name이 team인 input요소 중 체크된 요소를 얻어와 변수에 저장한다.
        // :checked 상태 선택자
        const team = $("input[name='team']:checked");
        // ** jQuery 선택자로 선택한 값을 js 변수에 저장하면
        // 선택 상태가 풀린다.

        // 체크된 요소의 값을 얻어오는 방법
        console.log(team.val());

        if(team.length == 0){ // 아무것도 체크되지 않은 경우
            alert("팀을 선택해주세요.");
        }else{
            alert(team.val()+"팀을 선택하셨습니다.");
        }
    });
});