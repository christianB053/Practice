// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// button 3개를 순회하며 콜백함수 호출(각 btn을 인자로 받아 btn.addEventListener 정의된? 함수 적용)
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.dir(e);
    // console.log(e.currentTarget);
    const styles = e.currentTarget.classList;
    // 이벤트 발생하면 이벤트에 관련한 다양한 정보를 담고 있는 이벤트 객체가 생성
    // click했을 때의 이벤트 객체를 인자로 받아서 event.prototype인 currentTarget(이벤트 핸들러가 바인딩된 DOM 요소, 즉 이벤트의 현재 대상, 클릭한 버튼 - 지금과 같이 동일한 이벤트헨들러를 여러 요소에 연결할 때 사용함)의 classList를 style변수에 저장
    // 만약 클릭한 버튼에 'decrease'라는 클래스가 있다면, 즉 decrease버튼을 클릭했을 때 count -1씩 감소
    // increase 버튼 클릭했을 때는 count 값에 +1
    // decrease, increase 아닐 때, 즉 reset 버튼 클릭했을 때는 count값을 0으로 만들어 줌
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // count 값이 0 초과이면 <span id="value">0</span> color green 적용
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    // btn 클릭할 때마다 #value의 textContent에 count 값을 넣어 줌
    value.textContent = count;
  });
});
