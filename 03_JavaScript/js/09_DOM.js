//Node 확인하기
document.getElementById("btn1").addEventListener("click",function(){

    // childNodes : 자식 노드 리스트
    const nodeList = document.getElementById("test").childNodes;
    
    console.log(nodeList);

    // parentNode : 부모노드
    const li1 = document.getElementById("li1");
    console.log(li1.parentNode);

    // append() : 마지막 자식 요소로 추가
    li1.parentNode.append("추가된 태그");

    // firstChild : 첫번쨰 자식 노드
    const ul = document.getElementById("test");
    console.log(ul.firstChild); //text
    console.log(ul.childNodes[3]); // <li> 1번 </li>

    // 버튼이 클릭 될 때 <li> 3번 </li> 태그에 내용 추가하기
    ul.childNodes[9].append("내용추가");

    //lastChild : 마지막 자식 노드
    console.log(ul.lastChild);

    // previousSibling : 이전 형제 노드 
    // nextSibling : 다음 형제 노드
    
    console.log(ul.childNodes[5].previousSibling.previousSibling);

    // 확인하기 버튼 노드 선택
    console.log(ul.childNodes[5].parentNode.nextSibling.nextSibling);
});


// 새로운 노드 생성 및 추가

// 1. 추가버튼 노드 얻어오기
const addBtn = document.getElementById("div1").childNodes[1].childNodes[3];

// 2. 추가버튼이 클릭되었을때에 대한 이벤트 작성
addBtn.addEventListener("click", addchild);


// #div1에 자식 요소 추가하는 함수
function addchild(e){
    // 3. 화면을 구성하는 요소(노드)를 만들어서 조립

    // ** createElement : 요소 노드 생성
    // 1) 감싸고 있는 div 생성
    const div = document.createElement("div");
    // (주의) js상에 요소가 생성된 것 뿐이지, 화면에 배치되지 않은 상태

    // 2) input 태그 생성
    const input = document.createElement("input");
    // 3) 생성된 input 요소에 type, name 속성을 세팅
    // ** 요소.setAttribute("속성명","속성값") : 해당 요소에 속성 추가
    input.setAttribute("type","text");
    input.setAttribute("name","div1-input");

    // 4) 추가 button 생성
    const add = document.createElement("button");
    add.setAttribute("type","button");

    // ** createTextNode("문자열") : 텍스트 노드 생성
    // ** appendChild(노드) : 노드를 부모의 마지막 자식으로 추가한다.
    // ** append(노드|문자열) : 노드 또는 문자열을 부모의 마지막 자식으로 추가한다.
    
    add.appendChild(document.createTextNode("추가"));
    //add.append("추가");

    // *********************************************************
    // 새롭게 생성된 요소에 이벤트 추가하기
    add.addEventListener("click", addchild);
                                // addChild -> addChild 함수에 작성된 코드를 그대로 가져옴
    // *********************************************************

    // 5) 제거 button 생성
    const rev = document.createElement("button");
    rev.setAttribute("type","button");

    // *********************************************************
    // 제거 버튼 클릭 시 부모 요소를 제거하는 함수 호출
    rev.setAttribute("onclick","removeParent(event);");

    // *********************************************************
    
    rev.appendChild(document.createTextNode("제거"));
    
    // 4. 알맞은 위치에 조립된 요소를 추가
    // div.appendChild(input);
    // div.appendChild(add);
    // div.appendChild(rev);

    // append()는 한번에 여러 요소를 추가할 수 있다!
    div.append(input,add,rev);

    e.target.parentNode.parentNode.append(div);
    // 이벤트가 발생한 요소의 부모의 부모요소의 마지막 자식으로 div 추가

}

// ** 어떤 요소가 함수를 호출했는지 알려주는 방법
// 1) 매개변수로 이벤트 발생 객체 event를 전달하는 방법 (event -> e)
// 2) 매개변수로 이벤트가 발생한 요소 자체를 전달하는 방법 (this)

// this 사용법
// function removeParent(el){
//     console.log(el);
// }

// 현재 요소의 부모요소를 제거하는 함수
function removeParent(e){
    // console.log(e.target);

    // 1. 이벤트가 발생한 요소의 부모 노드 선택
    console.log(e.target.parentNode);

    // removeChild(자식노드) : 해당 자식 노드 제거

    // console.log(e.target.parentNode.childNodes);
    // e.target.parentNode.removeChild(e.target.parentNode.childNodes[0]);
    // 이벤트가 발생한 요소의 부모 요소의 자식중
    // 0번 인덱스 노드 자식을 제거(removeChild)

    // 요소.remove(); : 해당 요소 제거
    e.target.parentNode.remove();
}

// Node와 Element의 차이점
document.getElementById("test2-btn").addEventListener("click",function(){
    const test2 = document.getElementById("test2");

    // test2의 자식 노드를 모두 반환(NodeList)
    console.log(test2.childNodes);

    // 내용이 '테스트4'인 요소 선택
    console.log(test2.childNodes[7]);

    /////////////////////////////////////////////////////////////////////

    //test2의 "자식 요소"를 모두 반환 (HTMLCollection)
    // HTMLCollection: 문서 내 요소를 순서대로 정렬한 유사 배열
    console.log(test2.children);

    // 내용이 '테스트4'인 요소 선택
    console.log(test2.children[3]);

    // test2의 "부모 요소"만 선택 (parentElement)
    console.log(test2.parentElement);

    // (참고) parentNode와 ParentElement의 차이점
    // -> 부모가 없을 경우
    // parentNode :document 반환
    // ParentElement : null 반환

    // firstElementChild : 첫 번쨰 자식 요소 반환 (없으면 null)
    console.log(test2.firstElementChild);

    // lastElementChild : 마지막 자식 요소 반환 (없으면 null)
    console.log(test2.lastElementChild);

    // test2의 마지막 자식 요소의 이전 형제 요소
    // previousElementSibling : 이전 형제 요소 (없으면 null)
    console.log(test2.lastElementChild.previousElementSibling);

    // test2의 첫번째 자식 요소의 다음 형제 요소
    // nextElementSibling : 다음 형제 요소 (없으면 null)
    console.log(test2.firstElementChild.nextElementSibling);

    // test2의 첫번째 자식 요소의 다음 형제 요소가 클릭되었을때
    // 해당 요소의 배경색을  "빨간색"으로 변경

    const second = test2.firstElementChild.nextElementSibling;
    
    second.addEventListener("click",function(){
        this.style.backgroundColor = "red";
    });
    
});
