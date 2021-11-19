// 자바스크립트 배열
document.getElementById("arr-btn1").addEventListener("click",function(){

    const div1 = document.getElementById("arr-div1");

    // div1에 작성된 이전 내용 삭제
    div1.innerHTML = "";

    // 배열 선언 방법
    const arr1 = new Array(3); // 3칸짜리 배열, 각 요소가 모두 비어있음.

    const arr2 = new Array(); // 비어있는 배열

    const arr3 = []; // [] : 배열기호, 비어있는 배열

    const arr4 = ["사과","바나나","딸기"]; // 배열 선언 및 초기화

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // arr1(3칸)의 각 요소에 값 대입
    arr1[0]="김밥";  // string
    arr1[1]= 123;   // number
    arr1[2]= true;  // boolean

    console.log(arr1);
    // -> 자료형 제한 없음 확인!

    arr1[3] = {"id":"user01","pw":"pass01"}; // object

    console.log(arr1);
    // -> 초기 지정된 크기 관계 없음. 길이 제한 없음 확인!

    // for문으로 출력하기
    for(let i=0; i<arr1.length; i++){
        div1.innerHTML += "arr1[" + i + "] : " + arr1[i] + "<br>";
    }

    div1.innerHTML += "arr1[3].id : " + arr1[3].id + "<br>";
    div1.innerHTML += "arr1[3].pw : " + arr1[3].pw + "<br>";

    div1.innerHTML += "arr1[3]['id'] : " + arr1[3]['id'] + "<br>";
    div1.innerHTML += "arr1[3]['pw'] : " + arr1[3]['pw'] + "<br>";

    // 향상된 for문(배열/객체)
    div1.innerHTML += "<br>";

    // 배열용
    // for ... of 구문 : 배열 내 요소들을 순차적으로 반복 접근
    // -> 자바의 향상된 for문과 비슷한 모양
    for( let item of arr1 ){

        if(typeof item != "object"){ // item이 오브젝트 타입이 아닐 경우
            div1.innerHTML += item + "<br>";
        }else{ // item이 오브젝트 타입인 경우
            
            // 객체용
            // for .. in 구문 : 객체 내 key값을 순차적으로 반복 접근하는 구문
            for(let key in item){
            // 현재 key     객체
                div1.innerHTML += key + " : " + item[key] + "<br>";
                                            // 객체 내에서 key값 일치하는 부분의 value 반환
            }

        }
        
    }

});

// 배열 관련 함수
document.getElementById("arr-btn2").addEventListener("click",function(){

    // 비어있는 배열 생성
    const arr = [];

    console.log(arr);

    //push() : 배열 마지막 요소로 추가
    arr.push("치킨");
    arr.push("피자");
    arr.push("초밥");
    arr.push("족발");
    console.log(arr);

    // pop() : 배열 마지막 요소 꺼내기
    console.log("꺼낸 요소의 값 : " + arr.pop() );
    console.log(arr);

    //indexOf("값") : 배열 내 값이 일치하는 요소의 인덱스 반환, 없으면 -1
    console.log("초밥 위치 : "+ arr.indexOf("초밥")); // 2
    console.log("족발 위치 : "+ arr.indexOf("족발")); // -1

    //toString() : 배열 내 요소를 하나의 문자열로 반환 (,)
    //join("구분자") : 배열 내 요소를 하나의 문자열로 반환 ("구분자")
    console.log(arr.toString()); // 치킨,피자,초밥
    console.log(arr.join("/")); // 치킨/피자/초밥

    // 빈 배열
    const arr2 = [];

    // 중복 없는 난수 (1~100) 10개 생성
    for(let i=0; i<10; i++){
        const ran = Math.floor(Math.random() * 100 + 1);
                    // (내림) 1 <= random < 101

        if(arr2.indexOf(ran) == -1){
            // arr2에 ran과 중복되는 값이 없을 경우
            arr2.push(ran); //배열 마지막 요소로 추가
        }else{
            i--; // i값  +1 -1 == 0 으로 만들어 현재 인덱스를 유지한다.
        }
    }

    // 생성된 난수 확인
    console.log(arr2);

    // 오름차순정렬
    // -> 그냥 sort() 진행 시 문자열의 정렬 기준을 따름
    console.log(arr2.sort( function(a,b){return a-b;} ));

    console.log(arr2); // sort()는 원본 배열의 요소를 재배치 하는 것이다.
                       // -> 정렬된 새 배열을 만든것이 아니다!


    // reverse() 오름차순 반대
    console.log(arr2.reverse());
});