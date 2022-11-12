const btn = document.querySelector("#btn");
const colorTxt = document.querySelector(".color");

const colors = [
  "teal",
  "coral",
  "cornflowerblue",
  "springgreen",
  "#DE648A",
  "#BD71FA",
  "#4272FB",
  "rgba(109, 206, 245, 96)",
  "rgba(87, 222, 166, 87)",
];

function randomBackgroundColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];

  colorTxt.textContent = colors[randomColor];
}

btn.addEventListener("click", randomBackgroundColor);
