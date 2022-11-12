const hex = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn = document.querySelector(".btn");
const colorTxt = document.querySelector(".color");

function randomBackgroundHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomColor = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomColor];
  }
  document.body.style.backgroundColor = hexColor;
  colorTxt.textContent = hexColor;
}

btn.addEventListener("click", randomBackgroundHexColor);
