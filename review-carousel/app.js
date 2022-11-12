const reviwes = [
  {
    id: 1,
    name: "김멋사",
    img: "images/first.jpg",
    job: "WEB DEVELOPER",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiispraesentium labore velit officia ea, ratione tempore omnis sit saepe tempora voluptates odio voluptatem doloribus enim minus provident vitae in a!",
  },
  {
    id: 2,
    name: "이멋사",
    img: "images/second.jpg",
    job: "CEO",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero ex tempora id totam quasi vel cumque dicta, laborum distinctio, voluptate aliquam doloremque possimus laboriosam aut, sit facilis velit fugiat.",
  },
  {
    id: 3,
    name: "박멋사",
    img: "images/third.jpg",
    job: "SINGER",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere ipsum, fugiat qui repellat unde vel delectus distinctio voluptatum temporibus, aspernatur commodi, similique labore quisquam harum cumque quidem nisi molestiae?",
  },
  {
    id: 4,
    name: "최멋사",
    img: "images/forth.jpg",
    job: "TEACHER",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod unde aperiam dolor delectus ea vitae, facilis nulla ratione ad inventore libero cupiditate, tempore laudantium temporibus facere. Eius corrupti ducimus minima?",
  },
];

const profile = document.querySelector(".profile-img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentCount = 0;

function paintReview() {
  const item = reviwes[currentCount];

  profile.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

function handlePrevBtn() {
  currentCount--;
  if (currentCount < 0) {
    currentCount = reviwes.length - 1;
  }
  paintReview();
}

function handleNextBtn() {
  currentCount++;
  if (currentCount > reviwes.length - 1) {
    currentCount = 0;
  }
  paintReview();
}

function handleRandomBtn() {
  let random = Math.floor(Math.random() * reviwes.length);
  currentCount = random;
  paintReview();
}

window.addEventListener("DOMContentLoaded", paintReview);
prevBtn.addEventListener("click", handlePrevBtn);
nextBtn.addEventListener("click", handleNextBtn);
randomBtn.addEventListener("click", handleRandomBtn);
