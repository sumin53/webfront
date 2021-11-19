$("#btn").on("click",function(){

    document.getElementById("wrap").innerHTML = "";

    //칸수 input
    const input = $("#input").val();

    // 배열
    let rowbox = [];
    let colbox = [];

    // 1. 행박스
    for(let row=0; row<Number(input); row++){

        rowbox[row] = $("<div class='rowbox'>");

        $("#wrap").append(rowbox[row]);

        for(let col=0; col<Number(input); col++){
    
            colbox[col] = $("<div class='colbox'>");

            $(rowbox[row]).append(colbox[col]);
        }
    }

    // 랜덤 제곱
    const pow = Math.pow(Number(input),2);

    const set = new Set();

    while(set.size < pow){
        set.add(Math.floor( Math.random() * pow + 1 ));
    }

    //set 정렬 순차 접근
    const ranNum = [];

    for(let item of set) ranNum.push(item);

    // col 배열
    const colNum = $(".colbox");

    for(let i=0; i<colNum.length; i++){
        $(colNum[i]).text(ranNum[i]);
    } 
  
});