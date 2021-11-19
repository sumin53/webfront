
document.getElementById("btn").addEventListener("click",function(){
    const arr = [];

    for(let i=0; i<6; i++){
        const ran = Math.floor(Math.random() * 50 + 1);

        if(arr.indexOf(ran) == -1){
            // arr2에 ran과 중복되는 값이 없을 경우
            arr.push(ran); //배열 마지막 요소로 추가
        }else{
            i--; // i값  +1 -1 == 0 으로 만들어 현재 인덱스를 유지한다.
        }

        document.getElementById("area-"+i).innerHTML = "<p>"+ arr[i] +"</p>";   
    } 
});

//////////////////////////////////////////////////////////////////////////////////////

document.getElementById("create-btn").addEventListener("click",function(){
    
    // 1~45까지 중복되지 않은 난수 6개를 오름차순으로 대입
    // -> 배열이용 (indexOf(), sort())

    // 1) 배열 생성
    const lottoArr = []; // 비어있는 배열
    // const lottoArr = new Array(6); // 6칸짜리 배열

    for(let i=0; i<6; i++){
        // 2) 난수 생성 (1 ~ 45)
        const ran = Math.floor(Math.random() * 45 + 1);

        // 3) 생성된 난수가 배열에 있는지 검사 (중복검사)
        if(lottoArr.indexOf(ran) == -1 ){ // 중복 x
            lottoArr.push(ran); // 4) 배열에 난수 추가
        }else{ //중복
            i--;
        }
    }

    // 5) 오름차순으로 정렬
    lottoArr.sort(function(a,b){return a-b;}); // 원본 배열 오름차순 정렬

    // 6) 생성된 난수를 화면에 출력
    for(let i=0; i<lottoArr.length; i++){
        document.getElementById("num"+(i+1)).innerHTML = "<p>"+lottoArr[i]+ "</p>";
    }

});