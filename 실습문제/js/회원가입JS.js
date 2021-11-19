// 아이디 유효성 검사
document.getElementById("id-input").addEventListener("blur",function(){

    // 입력이 되지 않은경우
    if(this.value.trim().length == 0){
         this.removeAttribute("class");
         return;
    }

    // 정규식
    const regExp = /^[a-z][a-zA-Z\d\-\_]{5,13}$/;

    if(regExp.test(this.value)){
        this.classList.add("true");
        this.classList.remove("false");
    }else{
        this.classList.add("false");
        this.classList.remove("true");
    }

});


// 비밀번호 확인 유효성 검사
document.getElementById("pwinput2").addEventListener("input",function(){
    
    const pwArea = document.getElementById("pw-area");

    if(pwinput.value.trim().length == 0){
        alert("비밀번호를 입력해주세요.");
        this.value = "";
        pwinput.focus();
    }

    if(pwinput.value == pwinput2.value){
        pwArea.innerText = "비밀번호 일치";
        pwArea.style.color = "green";
    }else{
        pwArea.innerText = "비밀번호 불일치";
        pwArea.style.color = "red";
    }

    if(this.value.trim().length == 0){
        //pwArea.style = "";
        pwArea.innerText = "";
    }

});

//이름 유효성 검사
document.getElementById("username").addEventListener("input",function(){

    const unArea = document.getElementById("unarea");

    const regExp = /^[가-힣]{2,5}$/

    if(regExp.test(this.value)){
        unArea.innerText = "정상입력";
        unArea.style.color = "green";    
    }else{
        unArea.innerText = "한글만 입력하세요";
        unArea.style.color = "red";  
    }

    if(this.value.trim().length == 0){
        unArea.innerText = "";
    }

});


function validate(){
    const telInput = document.getElementById("telinput");

    //const gender = document.querySelector("input[name='gender']");


    //전화번호 유효성 정규식
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;


    if(!regExp.test(telInput.value) && document.querySelector("input[name='gender']:checked").length == 0){
        alert("전화번호&성별에 체크 해주세요.")
        return false;
    }else if(!regExp.test(telInput.value)){
        alert("전화번호 체크 확인해주세요.");
        return false;
    }else if(document.querySelector("input[name='gender']:checked").length == 0){
        alert("성별에 체크해주세요.");
        return false;
    }
}
