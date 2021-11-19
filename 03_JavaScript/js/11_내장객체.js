//Date 확인
document.getElementById("btn1").addEventListener("click",function(){
    const date1 = new Date(); // 현재 시간

    // GMT
    const date2 = new Date("Mon Nov 08 2021 09:00:00");

    // UTC
    // -> 월 표현법이 1~12가 아닌 0 ~ 11로 표현
    const date3 = new Date(2021,10,08,09,0,0);
                        // 년, 월, 일, 시, 분, 초

    console.log(date1);
    console.log(date2);
    console.log(date3);

    // Date() 객체에서 년, 월, 일, 시, 분, 초, 요일 얻어오기
    console.log("년도 : " + date1.getFullYear() );
    console.log("월 : " + (date1.getMonth()+1) );
    console.log("일 : " + date1.getDate() );

    const arr = ["일", "월", "화", "수", "목", "금", "토" ];
    // 일요일 == 0 ~ 토요일 == 6
    console.log("요일 : " + arr[date1.getDay()] );

    // 시간
    console.log("시 : " + date1.getHours() );
    console.log("분 : " + date1.getMinutes() );
    console.log("초 : " + date1.getSeconds() );
});

// setTimeout 확인
document.getElementById("btn2").addEventListener("click",function(){
    window.setTimeout(function(){
        alert("setTimeout 확인!!");
    }, 3000 ); // 1000 == 1초
});

document.getElementById("btn3").addEventListener("click",function(){
    setTimeout(function(){
        alert("이동합니다.");
        location.href = "https://iei.or.kr/main/main.kh";
    }, 3000 ); // 1000 == 1초
});


// setInterval 확인
document.getElementById("btn4").addEventListener("click",function(){
    // 1초마다 반복 수행한다.
    window.setInterval(function(){
        console.log("날씨가 많이 춥습니다..");
    }, 1000);
});

//setInterval 문제 해결 방법 1
document.getElementById("btn5").addEventListener("click",function(){

    let count = 1;
    setInterval(function(){
        console.log(count++);
    }, 500);

    // 이벤트가 발생한 요소를 비활성화
    this.setAttribute("disabled",true);
});

//setInterval 문제 해결 방법 2
let flag = true;

document.getElementById("btn6").addEventListener("click",function(e){

    if(flag){
        flag = false;
        // 실행 되자마자 false로 바꾸게 되면 if문은 다시 실행되지 않는다 == 1번만 실행시키도록 하는 방법

        let count = 1;
        setInterval(function(){
            //this.innerText = count++;
            // ** 일반적인 함수내에서 this는 window 객체와 묶인다.
            e.target.innerText = count++;
        }, 500); // 0.5초
    }

});

// 시계 만들기(홈페이지가 열리자마자 시작되어야하니 스크립트 페이지 바로 밑에 작성)
setInterval(function(){
    
    // 시계가 출력될 요소 선택
    const clock = document.getElementById("clock");

    // 현재 시간
    const now = new Date();

    // 현재 시간을 시:분:초 형태로 가공
    const text = addZero(now.getHours())+":"+addZero(now.getMinutes())+":"+addZero(now.getSeconds());
    clock.innerText = text;
},1000);

// 시계에 출력되는 숫자가 한 자리인 경우 앞에 0 붙이는 함수
// 매개변수 이름은 자유롭게
function addZero(num){
    if(Number(num)<10){
        // 한자리인 경우
        return "0"+num;
    }else{
        return num;
    }
}

//clearInterval 확인

// *setInterval 저장용 전역 변수
let interval;

// 시작버튼
document.getElementById("test-btn1").addEventListener("click",function(){
    interval = setInterval(function(){
        const random = Math.floor(Math.random() * 26 + 1); // 1 ~ 26
        document.getElementById("test").innerText = addZero(random);
    },50); // 0.05초
});

// 종료버튼
document.getElementById("test-btn2").addEventListener("click",function(){
    clearInterval(interval);
});

console.log(location.href);