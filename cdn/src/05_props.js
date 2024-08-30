
/* 
    props(프로프스)?

    HTML Props는 HTML 속성을 통해 구성 요소에 전달됩니다.

    function 컴포넌트(props, ...) {
        ...
    }

    function 컴포넌트({인수1, 인수2, ...}) {
        ...
    }

    <컴포넌트 인수="값"인수2="값 />
    <태그 속성="값" 속성="값 />
    함수(인수1, 인수2, ...)
*/

/* 
    const props = {brand: 싼타페, ...}
    객체.속성 -> 값
*/
function Car1(props) {
    return <h2>나는 {props.color} {props.brand}!</h2>;
}

function Car2({brand, color}) {
    return <h2>나는 {color} {brand}!</h2>;
}

function Car3() {
    const carInfo = {brand: "페라리", color: "빨간"}
    return (
        <div>
            <h2>나는 {carInfo.color} {carInfo.brand}!</h2>
            <Car4 brand={carInfo} />
        </div>

    )
}

function Car4(props) {
    return <h2>나는 {props.brand}!</h2>;
}

const container0 = document.querySelectorAll(".item").item(0);
const root0 = ReactDOM.createRoot(container0);

// 컴포넌트 호출시 props로 전달할 값은 태그의 속성(brand)이 전달된다.
root0.render(
    <div>
        <Car1 brand="k7" color="흰색" />
        <Car2 brand="소나타" color="검정" />
        <Car3  />
    </div>
);
