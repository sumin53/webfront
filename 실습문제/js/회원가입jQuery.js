// 아이디 유효성 검사
$("#id-input").on("blur",function(){

    // 입력이 되지 않은경우
    if($(this).val().trim().length == 0){
        this.classList.remove("true");
        this.classList.remove("false");   
        return;
    }

    // 정규식
    const regExp = /^[a-z][a-zA-Z\d\-\_]{5,13}$/;

    if(regExp.test($(this).val())){
        this.classList.add("true");
        this.classList.remove("false");
    }else{
        this.classList.add("false");
        this.classList.remove("true");
    }

});

// 비밀번호 확인 유효성 검사
$("#pwinput2").on("input",function(){
    
    const pwArea = ("#pwarea");

    const pwInput = $("#pwinput");

    if($(pwInput).val().trim().length == 0){
        alert("비밀번호를 입력해주세요.");
        $(this).val("");
        pwInput.focus();
    }

    if($(pwInput).val() == $(this).val()){
        $(pwArea).text("비밀번호 일치");
        $(pwArea).css("color","green");
    }else{
        $(pwArea).text("비밀번호 불일치");
        $(pwArea).css("color","red");
    }

    if($(this).val().trim().length == 0){
        //pwArea.style = "";
        $(pwArea).text("");
    }

});

$("#username").on("input",function(){

    // 정규식 확인 div
    const unArea = $("#unarea");

    // 이름 정규식
    const regExp = /^[가-힣]{2,5}$/;

    if(regExp.test($(this).val())){
        $(unArea).text("정상입력");
        $(unArea).css("color","green");
    }else{
        $(unArea).text("한글만 입력하세요");
        $(unArea).css("color","red");
    }

    if($(this).val().trim().length == 0){
        $(unArea).text("");
    }
});

$("#join").on("click",validate);

function validate(){
    
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    const telInput = $("#telinput");
    const check = $("input[name='gender']:checked");

    if(!regExp.test(telInput.val()) && check.length == 0){
        alert("성별, 전화번호 둘다 입력해주세요.");
    }else if(check.length == 0){
        alert("성별에 체크해주세요");
    }else if(!regExp.test(telInput.val())){
        alert("전화번호 형식에 맞지 않습니다.");
    }else{

    }
};