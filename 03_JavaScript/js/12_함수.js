function clickCount(e){

    const div1 = document.getElementById("div1");
    const num = div1.innerText;
    div1.innerText = Number(num)+1;

    // 언제는 value ? 언제는 innverText, innverHTML?
    // -> value는 input태그의 고유 속성!

    // 요소.value == input 태그

    // 요소.innerText
    // 요소.innerHTML == 
}

function clickCount2(btn){
    const num = btn.innerText;
    btn.innerText = Number(num)+1;

    //e.target.innerText = count++;
}

// 익명 함수 확인
document.getElementById("btn1").addEventListener("click",function(){
                                                        // 익명함수
    this.style.backgroundColor = "yellow";

    // 1 ~ 10
    printConsole(function(i){
        return i + "번째 출력";
    });

    // 10 ~ 1
    printConsole(function(i){
        return (11-i)+"번쨰 출력";
    });
});

// 전달 받은 함수 fn을 10번 반복 수행
function printConsole(fn){
    for(let i=1; i<=10; i++){
        console.log(fn(i));
    }
}

// 즉시 실행 함수
function test1(){
    console.log("즉시 실행 함수 아니더라도 되는데요?");
}

test1();

// ***즉시 실행함수 사용
(function(){
    console.log("이게 더 빠름");
})();


var str = "전역변수";

(function(){
    var str = " 즉시 실행 함수의 지역변수";
    console.log(str);
})();

console.log(str);

// 화살표 함수(Arrow Function)

// 1. 익명함수와 화살표 함수의 표기법 차이

// 익명 함수
document.getElementById("btn2").addEventListener("click",function(){
    alert("익명 함수 실행");
});

// 화살표 함수
document.getElementById("btn3").addEventListener("click", () => {
    alert("화살표 함수 실행");
});

// 매개변수가 1개인 경우 () 생략
document.getElementById("btn4").addEventListener("click", e => {
    e.target.style.backgroundColor = "yellow";
});

// 함수 정의 부분이 return 구문만 있는 경우
// {}, return 생략
document.getElementById("btn5").addEventListener("click",() => {
    
    // 익명함수
    printConsole2(function(num){return num * 2;});

    // 화살표 함수
    printConsole2( (num) => num * 3 );

    // 화살표 함수 (), {}, return 모두 생략
    printConsole2( num => num*4 );

    // return 값이 객체이면 {}, return 생략 불가능
    printConsole2( num => { return {id:"user01", pw:"pass01"} } )
});

// 매개변수로 함수를 전달 받아 사용
function printConsole2(otherFn){
    console.log( otherFn(2) );
}