const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

questionEl.innerText = `What is ${num1} miltiplied by ${num2}?`;

let score = JSON.parse(localStorage.getItem("score"));

const correctAns = num1 * num2;

if(!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if(userAns === correctAns) {
    score++
    updateLocalStorage();
  }else{
    score = 0;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}
