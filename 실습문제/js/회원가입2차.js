// jQuery 버전
// $("#idinput").on("blur",function(){
    
//     const regExp = /^[a-z][a-zA-Z\d\-\_]{5,13}$/;

//     if(regExp.test($(this).val())){
//         $(this).addClass("ture");
//         $(this).removeClass("false");
//     }else{
//         $(this).addClass("false");
//         $(this).removeClass("ture");
//     }

//     if($(this).val().trim().length == 0){
//         $(this).removeClass("false");
//         $(this).removeClass("ture");
//     }
// });

//js 버전 - 아이디
document.getElementById("idinput").addEventListener("blur",function(){

    if(this.value.trim().length == 0){
        this.removeAttribute("class");
        return;
    }

    const regExp = /^[a-z][a-zA-z\d\-\_]{3,15}$/;

    if(regExp.test(this.value)){
        this.classList.add("ture");
        this.classList.remove("false");
    }else{
        this.classList.add("false");
        this.classList.remove("ture"); 
    }

});


// $("#pwinput2").on("input",function(){
    
//     if($("#pwinput").val().trim().length == 0){
//         alert("비밀번호를 입력해주세요.");
//         $(this).val("");
//         $("#pwinput").focus();
//     }

//     if($(this).val() == $("#pwinput").val()){
//         $("#pwarea").text("비밀번호 일치");
//         $("#pwarea").css("color","green");
//     }else{
//         $("#pwarea").text("비밀번호 불일치");
//         $("#pwarea").css("color","red");
//     }

//     if($(this).val().trim().length == 0){
//         $("#pwarea").text("");
//     }

// });

// JS 버전 - 비밀번호 확인
document.getElementById("pwinput2").addEventListener("input",function(){

    const pwInput = document.getElementById("pwinput");
    const userPwArea = document.getElementById("pwarea");

    if(pwInput.value.trim().length == 0){
        alert("비밀번호를 입력해주세요.");
        this.value = "";
        pwInput.focus();
    }

    if(this.value == pwInput.value){
        userPwArea.innerText = "비밀번호일치";
        userPwArea.style.color = "green";
    }else{
        userPwArea.innerText = "비밀번호 불일치";
        userPwArea.style.color = "red";  
    }

    if(this.value.trim().length == 0){
        userPwArea.innerText = "";
    }
});


// jQuery - 이름
// $("#username").on("change",function(){
    
//     const regExp = /^[가-힣]{2,5}$/;

//     if(regExp.test($(this).val())){
//         $("#usernamearea").text("정상입력");
//         $("#usernamearea").css("color","green");
//     }else{
//         $("#usernamearea").text("한글만 입력하세요");
//         $("#usernamearea").css("color","red");
//     }

//     if($(this).val().trim().length == 0){
//         $("#usernamearea").text("");
//     }
// });

// JS - 이름
document.getElementById("username").addEventListener("input",function(){

    const userNameArea = document.getElementById("usernamearea");

    const regExp = /^[가-힣]{2,5}$/;

    if(regExp.test(this.value)){
        userNameArea.innerText = "정상입력";
        userNameArea.style.color = "green";
    }else{
        userNameArea.innerText = "한글만 입력해주세요";
        userNameArea.style.color = "red";
    }

    if(this.value.trim().length == 0){
        userNameArea.innerText = "";
    }
});

// jQuery - 전화번호, 성별체크
// function validate(){

//     const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

//     if($("#userTel").val().length == 0 && $("input[name='gender']:checked").length == 0){
//        alert("전화번호와 성별 체크 해 주세요"); 
//        return false;
//     }else if($("#userTel").val().length == 0){
//         alert("전화번호를 입력 해주세요.");
//         return false;
//     }else if( $("input[name='gender']:checked").length == 0){
//         alert("성별을 선택해주세요");
//         return false;
//     }

//     if(!regExp.test($("#userTel").val())){
//         alert("전화번호의 형식이 올바르지 않습니다.");
//         $("#userTel").val("");
//         return false;
//     }
// }


// JS - 전화번호, 성별 체크
function validate(){
    const userTel = document.getElementById("usertel");
    const gender = document.querySelector("input[type='radio']:checked");
    
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!regExp.test(userTel.value) && gender == false){
        alert("전화번호 형식에 맞지 않거나 성별에 체크해주세요.");
        return false;
    }else if(!regExp.test(userTel.value)){
        alert("전화번호의 형식이 올바르지 않습니다.");
        return false;
    }else if(gender == false){
        alert("성별을 선택해주세요.");
        return false;
    }
}

