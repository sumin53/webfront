// 유효성 검사가 진행 되었는지 확인하여 체크하는 객체
const confirmObj ={
    userId : false,
    userPw : false,
    userPw2 : false,
    userName : false,
    userEmail : false
}

// 아이디 유효성 검사
document.getElementById("userId").addEventListener("input",function(){
                                                // input 이벤트
                                                // 키보드, 마우스, 프로그램등 입력과
                                                // 관련된 모든 행동을 인지한다.
    //console.log(this.value);

    if(this.value.trim().length == 0){ // 입력되지 않은 경우
        this.removeAttribute("class"); // class 속성 제거
        confirmObj.userId = false;
        return;
    }

    // 영어 소문자로 시작
    // 나머지는 영어 대/소문/숫자 특수문자 "-","_"
    // 전체 길이 6~14글자
    const regExp = /^[a-z][a-zA-z\d\-\_]{5,13}$/;

    if(regExp.test(this.value)){ // 아이디가 유효한 경우
        this.classList.add("validation");
        this.classList.remove("invalidation");

        confirmObj.userId = true;
    }else{ // 유효하지 않은 경우 
        this.classList.add("invalidation");
        this.classList.remove("validation");

        confirmObj.userId = false;
    }
});

document.getElementById("userPw").addEventListener("input",function(){

    if(this.value.trim().length == 0){
        this.removeAttribute("class");
        confirmObj.userPw = false;
        return;
    }

    // 영어, 숫자, 특수문자 1개 이상 6~14
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,14}$/;

    if(regExp.test(this.value)){
        this.classList.add("validation");
        this.classList.remove("invalidation");

        confirmObj.userPw = true;
    }else{
        this.classList.add("invalidation");
        this.classList.remove("validation");

        confirmObj.userPw = false;
    }
});

// 비밀번호 확인
// 앞서 작성된 비밀번호와 일치하면 초록테두리
// 일치하지 않으면 빨간 테두리
// 아무것도 작성되지 않으면 기본테두리

document.getElementById("userPw2").addEventListener("input",function(){

    if(this.value.trim().length == 0){
        this.removeAttribute("class");
        confirmObj.userPw2 = false;
        return;
    }

    if(userPw.value == userPw2.value){
        this.classList.add("validation");
        this.classList.remove("invalidation");

        confirmObj.userPw2 = true;

    }else{
        this.classList.add("invalidation");
        this.classList.remove("validation");

        confirmObj.userPw2 = false;
    }
});

// 이름 유효성 검사
// - 한글(자음+모음[+받침]) 2글자 이상 5글자 이하
// /^[가-힣]{2,5}4/
document.getElementById("userName").addEventListener("input",function(){

    if(this.value.trim().length == ""){
                                // 0과 동일방법
        this.removeAttribute("class");
        confirmObj.userName = false;
        return;
    }

    const regExp = /^[가-힣]{2,5}$/;

    if(regExp.test(this.value)){
        this.classList.add("validation");
        this.classList.remove("invalidation");
        confirmObj.userName = true;
    }else{
        this.classList.add("invalidation");
        this.classList.remove("validation");
        confirmObj.userName = false;
    }
});


// 이메일 유효성 검사
// - 아무 문자 4글자 이상
// @
// 아무문자 1개 이상
// . 아무문자 1개 이상 -> 1~3 반복
// /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/
document.getElementById("userEmail").addEventListener("input",function(){
    
    if(this.value.trim().length == 0){
        this.removeAttribute("class");
        confirmObj.userEmail = false;
        return;
    }

    const regExp =  /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/;

    if(regExp.test(this.value)){
        this.classList.add("validation");
        this.classList.remove("invalidation");
        confirmObj.userEmail = true;
    }else{
        this.classList.add("invalidation");
        this.classList.remove("validation");
        confirmObj.userEmail = false;
    }
});

// 유효성 검사여부 확인 함수
function signUpValidate(){

    // 1) for문을 이용하여 confirmObj의 모든 값에 접근
    for(let key in confirmObj){
        // 2) 현재 key에 매핑되는 value가 false인 경우를 찾음
        if(confirmObj[key] == false){

            // 3) 경고창 출력
            alert("유효하지 않은 값이 입력되었습니다.");

            // 4) 유효하지 않은 값이 입력된 input focus 이동
            document.getElementById(key).focus();

            // 5) 함수 종료 및 false 반환
            return false;
        }
    }
}