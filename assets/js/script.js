// Generate a random number between (1-30)

const secretNumber = Math.trunc(Math.random() * 30) + 1;

// initialize score and highscore
let score = 20;
let highscore = 0;

const againBtn = document.querySelector(".btn--again");
const checkBtn = document.querySelector(".btn--check");
