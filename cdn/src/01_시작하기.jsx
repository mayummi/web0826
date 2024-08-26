// import "./src/01_시작하기.css";


/*  
1. 컴포넌트 형식
function 컴포넌트(){
    return JSX 문장;
    }
    
    가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
    */

// 컴포넌트 생성
function Hello() {
    // 리턴 뒤에 한 줄 문장
    // return <h1>Hello World!</h1>;
    // 리턴 뒤에 두 줄 이상의 문장은 (); 로 묶고 문장 끝 ; 쓴다.
    return (
        // JSX의 끝에는 ; 쓰지 않는다.
        // return 안의 root는 1개 이어야 한다.
        <div style={{margin:"12px"}}>
            {/* XML에서 빈 요소는 끝에 <img /> */}
            <img src="https://img.megabox.co.kr/SharedImg/2024/07/03/QaslTt607PkNH8mPWm6ZUH3UwDx2bHoH_420.jpg" alt="사랑의 하츄핑" />
            <div>
                <span style={{ padding: "0 4px", borderRadius: "3px", display: "inline", background: "red" }}>All</span>
                {/* 속성={표현식} -> {{객체}} */}
                {/* {{}} -> 바깥쪽 괄호는 표현식 */}
                {/* {{}} -> 안쪽 객체 괄호 */}
                {/* 객체로 스타일을 지정한다. */}
                {/* 속성명은 카멜표기법으로 쓴다. 예) borderRadius 또는 "border-radius" */}
                {/* class -> className으로 기록한다. */}
                <h3 className="card_tit">사랑의 하츄핑</h3>
            </div>
            <div>
                <span>예매율 1%</span>
                <span>개봉일 2024.08.07</span>
            </div>
            <div>
                <button>♥ 487</button>
                <button>예매</button>
            </div>
            <p>UI를 구축하기 위한 JS 라이브러리이다.</p>
        </div>
    );
}



// 자식요소를 부모요소에 넣어 화면에 표시한다.
function App(){
    return (
        <div style={{display: "flex"}}>
            <Hello />
            <Hello />
            <Hello />
            <Hello />
        </div>
    );
}

/* 
    ReactDOM.render(요소, HTMLDOM컨테이너);
        1. ReactDOM은 가상 DOM을 생성하는 객체
        2. render()은 리액트 요소를 HTML DOM 컨테이너에 넣는 메서드
        3. 요소는 XML로 리턴하는 컴포넌트의 리턴 값을 XML의 빈 요소로 쓴다.
            예) <Hello />
        4. 컨테이너는 HTML 페이지의 div#root를 말한다.
*/

// 출력 -> 렌더링
ReactDOM.render(<App />,document.querySelector("#root"));