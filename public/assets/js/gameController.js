import { getRandomNumber } from "./utils.js";

// initialize score and highscore

let state = {
  secretNumber: getRandomNumber(30),
  score: 20,
  highscore: 0,
};

// UI Elements
const againBtn = document.querySelector(".btn--again");
const checkBtn = document.querySelector(".btn--check");
const guessEl = document.querySelector("#guess-input");
const body = document.querySelector("body");
const messageEl = document.querySelector(".game-info__message");
const numberEl = document.querySelector(".secret-number");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");

highscoreEl.textContent = state.highscore;

function renderMessage(message) {
  messageEl.textContent = message;
}

checkBtn.addEventListener("click", function () {
  const guess = Number(guessEl.value);
  // No input
  if (!guess) {
    renderMessage("⛔ No number!");
    return;
  }
  // Player wins
  if (guess === state.secretNumber) {
    body.style.backgroundColor = "#60b347ff";
    renderMessage("Correct Number! 🎉");
    numberEl.style.width = "30rem";
    numberEl.textContent = state.secretNumber;
    if (state.score > 0 && state.score > state.highscore) {
      state.highscore = state.score;
      highscoreEl.textContent = state.highscore;
    }
    return;
  }
  // Wrong number
  if (state.score > 1) {
    renderMessage(guess > state.secretNumber ? "📈 Too high!" : "📉 Too low!");
    state.score--;
    scoreEl.textContent = state.score;
  } else {
    // Game over
    renderMessage("💥 You lost the game!");
    scoreEl.textContent = 0;
    body.style.backgroundColor = "#ff0000ff";
    return;
  }
});

// Reset the game
againBtn.addEventListener("click", function () {
  state.score = 20;
  state.secretNumber = Math.trunc(Math.random() * 30) + 1;

  renderMessage("Start guessing...🙂");
  scoreEl.textContent = state.score;
  numberEl.textContent = "?";
  guessEl.value = "";
  numberEl.style.width = "15rem";
  body.style.backgroundColor = "#303030";
});

// TO DO
// document.getElementById("currentYear").textContent = new Date().getFullYear();
