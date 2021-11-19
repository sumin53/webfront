$("#btn1").on("click",function(){
    $("#div").css("backgroundColor",$("#input1").val());
});

//선생님 풀이 - 2단계
$("#btn4").on("click",function(){
    
    //input2 클래스 요소들
    const input2 = $(".input2");
    // second 클래스 요소들
    const second = $(".second");

    for(let i=0; i<second.length; i++){
        $(second[i]).css("backgroundColor",$(input2[i]).val());
    }
});

//선생님 풀이 - 3단계
$(".input3").on("input",function(){
    // console.log(this.value);

    /* const input3 = $(".input3");
    const second2 = $(".second2");

    for(let i=0; i<second2.length; i++){
        $(second2[i]).css("backgroundColor",$(input3[i]).val());
        $(input3[i]).css("border-color",$(input3[i]).val());
    }
    */

    // js + jQuery
    this.previousElementSibling.style.backgroundColor = $(this).val();

    // jQuery 버전
    $(this).prev().css("backgroundColor",$(this).val());
    // $(this) : 입력 이벤트가 발생한 현재 요소를 jQuery 선택자로 선택
    // .prev() : 선택된 요소의 이전 요소를 jQuery 선택자로 선택

    this.style.borderColor = $(this).val();
});


$("#btn2").on("click",function(){

    //const colorList = $("input[type=text]");
    const colorList = $("input[type=text]");

    for(let i=1; i<colorList.length; i++){

        $("#div"+i).css("backgroundColor",$(colorList[i]).val());

     }

});

$(function(){

    $("#ul2 input").on("input",function(){

        const colorList = $("input[type=text]");
        
        for(let i=7; i<13; i++){
            $("#div"+i).css("backgroundColor",$(colorList[i]).val());
            $("#input"+i).css("color",$(colorList[i]).val());
        }

    });

});

   

   
