// focus

// #focus-blur요소에 포커스가 맞춰졌을 때의 동작
$("#focus-blur").on("focus",function(){
    $(this).css("backgroundColor","pink");
});

// blur

// #focus-blur 요소가 포커스를 읽은 경우에 동작
$("#focus-blur").on("blur",function(){
    // initial : 초기값
    $(this).css("backgroundColor", "initial");
});


// change 1

// #change1의 값이 변한 경우에 동작
$("#change1").on("change",function(){
    console.log("chang1의 값이 변경 되었습니다.");
    console.log($(this).val());
    console.log($(this).prop("checked")); // 체크상태 : true / 아니면 false
});

// change 2

// #change2의 값이 변한 경우에 동작
$("#change2").on("change",function(){
    console.log("chang2의 값이 변경 되었습니다.");
    console.log($(this).val());
});



// select
// #select의 내용에 블럭이 설정된 경우 동작
$("#select").on("select",function(){
    $(this).css("backgroundColor","springgreen");
});


// on() 메소드 추가 사용법
$("#on-test").on("keyup blur click paste",function(){
                // keyup 또는 blur 또는 click 이벤트 발생시
    console.log($(this).val());
});

$("#on-test").on("input",function(){
                // input : 입력과 관련된 모든 동작 발생 시
console.log($(this).val());
});

/*$("#on-test").on("blur",function(){
    console.log($(this).val());
});

$("#on-test").on("click",function(){
    console.log($(this).val());
});*/



$("#input-content").on("input",function(){
    // console.log( $(this).val().length);

    // 현재 작성된 글자 수를 변수에 저장
    let count = $(this).val().length;

    // 100글자 이상 작성시 counter를 주황색으로 
    if(count >= 100 && count < 130){
        $("#counter").css("color","green");
    }

    // 130글자 이상이면 다홍색으로 
    else if(count >= 130 && count < 150 ){
        $("#counter").css("color","orange");
    }

    // 150 글자 작성시 빨강색으로 출력, 150 이상 작성되지 못하게 함
    else if(count >= 150){
        $("#counter").css("color","red");

        // 150 글자 초과시 150 글자 까지의 문자열을 잘라내요
        // #input-content의 value로 대입 --> 150 글자 초과 부분이 모두 제거됨.
        $(this).val($(this).val().substr(0,150));
        // 문자열.substr(시작인덱스, 종료인덱스)
        // -> 문자열을 시작 인덱스(이상)부터 종료 인덱스 미만까지 잘라서 반환

        // count를 150으로 변경
        count = 150;
    }
   
    // 위 세가지 상황중 일치하는 경우가 없으면 검정색으로 출력
    else{
        $("#counter").css("color","black");
    }
        
    
    // 제이쿼리
    $("#counter").text(count);

    //자스
    //document.getElementById("counter").innerText = this.value.length;
});
