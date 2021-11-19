function accessId(){

    // id 속성값이 div1인 요소 얻어오기
    const div1 = document.getElementById("div1");

    // js는 카멜 표기법을 사용한다.

    // #div1의 배경색을 얻어와 bgColor변수에 저장
    const bgColor = div1.style.backgroundColor;

    // js에서는 문자열 비교시에도 == 비교 연산자를 사용한다.
    if(bgColor == "red"){ // 배경색이 빨강이면 주황색으로
        div1.style.backgroundColor = "orange"; 
    }else if(bgColor == "orange"){ // 주황색이면 노란색으로
        div1.style.backgroundColor = "yellow";
    }else{ // 두개 다 아니면 빨강으로 변경
        div1.style.backgroundColor = "red";
    }
}

// 2.class로 요소 접근하기
function accessClass(){

    // class 속성값으로 div2를 가지는 요소를 모두 얻어와 배열로 저장
    const arr = document.getElementsByClassName("div2");

    console.log(arr); // 배열인지 확인

    // 각 배열 요소(== div 요소)에 배경색 지정
    arr[0].style.backgroundColor = "pink";
    arr[1].style.backgroundColor = "tomato";
    arr[2].style.backgroundColor = "blue";


    // 각 배열 요소에 h1태그를 이용하여 자신의 이름 한글자씩 추가
    arr[0].innerHTML = "<h1>정</h1>";
    arr[1].innerHTML = "<h1>수</h1>";
    arr[2].innerHTML = "<h1>민</h1>";
}

//3. TagName으로 요소 접근하기
function accessTagName(){
    const arr = document.getElementsByTagName("li");

    for(let i=0; i<arr.length; i++){
        arr[i].style.backgroundColor = "rgb(220,50,"+(i*50+50)+")";
    }
}

//4. name으로 요소 접근하기
function accessName(){

    // #div4 얻어오기
    const div4 = document.getElementById("div4");

    // name 속성값이 "hobby" 요소 모두 얻어오기
    const hobbyList = document.getElementsByName("hobby");
                                // js 제공x, 브라우저 제공 함수 o

    console.log(hobbyList);

    // 체크내용 출력 전 #div4 내용 모두 삭제
    div4.innerHTML = "";

    let count = 0; // 체크 개수 기록용 변수

    // 얻어온 checkbox 중 체크된 요소 값 출력하기
    for(let i=0; i<hobbyList.length; i++){
        if(hobbyList[i].checked){
            // radio/checkbox 요소에 체크가 되어 있으면 true를 반환
            div4.innerHTML += hobbyList[i].value +" ";
                                    //.value : input 요소의 값을 얻어옴
            
            count++; // count 1 증가
        }
    }

    div4.innerHTML += "<br><br> 선택한 취미 개수 : " + count ;
}

// 5.css선택자로 요소 접근하기
function accessCss(){
                        //querySelector를 사용하려면 앞부분에 어떤 요소인지 작성해야한다.
    const el1 = document.querySelector("#div5");

    el1.style.backgroundColor = "orange";

    // .cls 모두 선택
    const el2 = document.querySelectorAll(".cls");

    console.log(el2);

    //.cls 요소에 모두 글자색 파란색
    for(let i=0; i<el2.length; i++){
        el2[i].style.color = "aqua";
    }

    // span태그 선택
    const el3 = document.querySelector(".cls > span");
    el3.style.fontSize = "30px";
}


function testFn(){

    //#num1 input 요소에 작성된 값을 얻어오기
    const num1 = document.getElementById("num1").value;

    //input에 작성된 값은 모두 문자열!!
    //Number(숫자 문자열) -> 숫자
    console.log(Number(num1)+100);
}


/////////////////////////////////////////////////////////

// 간의 계산기 만들기
function add(){
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    const div6 = document.getElementById("div6");

    div6.innerHTML = "<br> 계산결과 : " + (Number(num2) + Number(num3)) ;
}

function minus(){
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    const div6 = document.getElementById("div6");

    div6.innerHTML = "<br> 계산결과 : " + (Number(num2) - Number(num3)) ;
}

function multi(){
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    const div6 = document.getElementById("div6");

    div6.innerHTML = "<br> 계산결과 : " + (Number(num2) * Number(num3)) ;
}

function remainder(){
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    const div6 = document.getElementById("div6");
    
    if(num3 == 0){
        div6.innerHTML = "0으로 나눌수 없습니다."
    }else{
        div6.innerHTML = "<br> 계산결과 : " + (Number(num2) / Number(num3)) ;
    }

    
}

function division(){
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    const div6 = document.getElementById("div6");

    div6.innerHTML = "<br> 계산결과 : " + (Number(num2) % Number(num3)) ;
}
