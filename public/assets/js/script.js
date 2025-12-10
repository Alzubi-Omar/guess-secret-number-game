// Generate a random number between (1-30)
let secretNumber = Math.trunc(Math.random() * 30) + 1;

// initialize score and highscore
let score = 20;
let highscore = 0;

// UI Elements
const againBtn = document.querySelector(".btn--again");
const checkBtn = document.querySelector(".btn--check");
const guessEl = document.querySelector("#guess-input");
const body = document.querySelector("body");
const messageEl = document.querySelector(".game-info__message");
const numberEl = document.querySelector(".secret-number");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");

highscoreEl.textContent = highscore;
// numberEl.textContent = secretNumber;

checkBtn.addEventListener("click", function () {
  const guess = Number(guessEl.value);
  // No input
  if (!guess) {
    messageEl.textContent = "⛔ No number!";
    return;
  }
  // Player wins
  if (guess === secretNumber) {
    body.style.backgroundColor = "#60b347ff";
    messageEl.textContent = "Correct Number! 🎉";
    numberEl.style.width = "30rem";
    numberEl.textContent = secretNumber;

    if (score > 0 && score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
    return;
  }
  // Wrong number
  if (score > 1) {
    messageEl.textContent =
      guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
    score--;
    scoreEl.textContent = score;
  } else {
    // Game over
    messageEl.textContent = "💥 You lost the game!";
    scoreEl.textContent = 0;
    body.style.backgroundColor = "#ff0000ff";
    return;
  }
});

// Reset the game
againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 30) + 1;

  messageEl.textContent = "Start guessing...🙂";
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessEl.value = "";
  numberEl.style.width = "15rem";
  body.style.backgroundColor = "#303030";
});
