document.getElementById("create-btn").addEventListener("click",function(){
    // Set (중복허용x)
    const set = new Set(); //Set 객체 생성

    // 난수를 생성하여 중복되지 않은 값 6개가 될때까지 set에 추가
    while(set.size < 6){
        //set.size() : 현재 Set에 담긴 값의 개수
        set.add(Math.floor( Math.random() * 45 + 1 ));
    }

    //Set은 정렬이 안되기 때문에 배열로 변환
    const lottoArr = [];

    // for of 구문으로 set 순차 접근
    for(let item of set) lottoArr.push(item); // 한줄이면 {} 생략 가능

    lottoArr.sort(function(a,b){return a-b;}); // 숫자 오름차순 정렬

    const areatArr = document.getElementsByClassName("area");

    for(let i=0; i<areatArr.length; i++){
        areatArr[i].innerText = lottoArr[i];
    }
});