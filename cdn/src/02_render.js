/*  

    document.write("<hr>")

        1. 컴포넌트 형식
      function 컴포넌트(){
        return (
            JSX 문장
            <hr>
        );
      }

      가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
      나. return 키워드 필수!
      다. JSX의 태그 끝에는 ; 을 쓰지 않는다.
      라. JSX 문장은 "" 묶으면 안된다.
      마. JSX 문장이 한 문장일 경우 (); 생략 가능
*/

// 변수 선언
// 여기서 값은 JSX

const hi = (
  // 반드시 최상의 부모는 하나
  <div>
    <h1>Hi World</h1>
    <h2>나는 두 문장이다.</h2>
  </div>
);

/* 
// 라이브러리 이름: React(언어) + ReactDOM(가상돔) + Babel(JSX변역)

// 리액트의 출력
  객체.메서드
  1. 첫 번째 방법
    1. ReactDOM.render(element, container);

      (1). ReactDOM은 가상 DOM을 생성하는 객체
      (2). render()은 요소를 컨테이너에 넣는 메서드
      (3). element는 변수명으로 쓴다.
      (4). container는 HTML 페이지의 div#root를 말한다.

    2. 두 번째 방법
      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<p>Hello</p>);

      (5) ReactDOM.createRoot()는 HTML 요소를 가져와서 새롭게 루트(root)를 생성한다.
*/

// 출력 -> 렌더링
ReactDOM.render(hi, document.getElementById("root"));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);

// ReactDOM.render(
//     <div style={{ display: "flex" }}>
//         <hello />
//         <hello />
//         <hello />
//         <hello />
//     </div>,
//     document.querySelector("#root")
// );
