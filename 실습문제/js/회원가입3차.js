// 아이디

//jQuery 방식
/*$("#userid").on("blur",function(){
    const regExp = /^[a-z][a-zA-Z\d\-\_]{5,13}$/;

    if(regExp.test($(this).val())){
        $(this).addClass("true");
        $(this).removeClass("false");
    }else{
        $(this).addClass("false");
        $(this).removeClass("true");
    }

    if($(this).val().trim().length == 0){
        $(this).removeClass("true");
        $(this).removeClass("false");
    }

});*/

//JS 버전
document.getElementById("userid").addEventListener("blur",function(){

    const regExp = /^[a-z][a-zA-Z\d\-\_]{5,13}$/;

    if(regExp.test(this.value)){
        this.classList.add("true");
        this.classList.remove("false");
    }else{
        this.classList.add("false");
        this.classList.remove("true");
    }

    if(this.value.trim().length == 0){
        this.classList.remove("false");
        this.classList.remove("true");
    }
});

///////////////////////////////////////////////////////////////

// jQuery -비밀번호 확인
/*$("#userpw2").on("input",function(){

    if($("#userpw").val().trim().length == 0){
        alert("비밀번호를 입력해주세요.");
        $(this).val("");
        $("#userpw").focus();
    }

    if($(this).val() == $("#userpw").val()){
        $("#userpw-area").text("비밀번호 일치");
        $("#userpw-area").css("color","green");
    }else{
        $("#userpw-area").text("비밀번호 불일치");
        $("#userpw-area").css("color","red");
    }

    if($(this).val().trim().length == 0){
        $("#userpw-area").text(" ");
    }
});*/

//JS 버전
document.getElementById("userpw2").addEventListener("input",function(){
    
    const userPw = document.getElementById("userpw");
    const userPwArea = document.getElementById("userpw-area");

    if(userPw.value.trim().length == 0){
        alert("비밀번호를 입력해주세요.");
        this.value = "";
        userPw.focus();
    }

    if(this.value.length == userPw.value.length){
        userPwArea.innerText = "비밀번호 일치";
        userPwArea.style.color = "green";
    }else{
        userPwArea.innerText = "비밀번호 불일치";
        userPwArea.style.color = "red";
    }

    if(this.value.trim().length == 0){
        userPwArea.innerText = "";
    }

});

//////////////////////////////////////////////////////////////////

// jQuery 이름 유효성
/*$("#username").on("change",function(){

    const regExp = /^[가-힣]{2,5}$/;

    if(regExp.test($(this).val())){
        $("#usernamearea").text("정상입력");
        $("#usernamearea").css("color","green");
    }else{
        $("#usernamearea").text("한글만 입력하세요");
        $("#usernamearea").css("color","red"); 
    }

    if($(this).val().trim().length == 0){
        $("#usernamearea").text("");
    }
});*/

//JS 버전
document.getElementById("username").addEventListener("change",function(){

    const regExp = /^[가-힣]{2,5}$/;
    const userNameArea = document.getElementById("usernamearea");

    if(regExp.test(this.value)){
        userNameArea.innerText = "정상입력";
        userNameArea.style.color = "green";
    }else{
        userNameArea.innerText = "한글만입력하세요";
        userNameArea.style.color = "red";
    }

    if(this.value.trim().length == 0){
        userNameArea.innerText = "";
    }
});

///////////////////////////////////////////////////////////////////

// jQuery 버전
function validate(){

    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if($("#usertel").val().trim().length == 0 && $("input[type='radio']:checked").length == 0){
        alert("전화번호, 성별 입력해주세요.");
        return false;
    }else if($("#usertel").val().trim().length == 0){
        alert("전화번호의 형식이 올바르지 않습니다.");
        return false;
    }else if($("input[type='radio']:checked").length == 0){
        alert("성별 선택해주세요.");
        return false;
    }

    if(!regExp.test($(this).val())){
        alert("전화번호의 형식이 올바르지 않습니다.");
        return false;
    }
}