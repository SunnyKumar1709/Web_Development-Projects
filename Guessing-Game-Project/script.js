"use strict";

// Defining the Random Secret Number.
let SecretNum = Math.trunc(Math.random() * 20) + 1;
// Defining a score Variable.
let score = 20;
// Defining a High score Variable.
let HighScore = 0;
// Defining a variable (DisplayMessage) for 'Message' class.
let DisplayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Applying AddListenerEvent on 'Check' Class.
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   When There is no input..
  if (!guess) {
    DisplayMessage("No Number!");
    // When guess matches the secret number.
  } else if (guess === SecretNum) {
    DisplayMessage("Correct Guess.");
    document.querySelector(".number").textContent = SecretNum;
    document.querySelector("body").style.background = "green";
    if (score > HighScore) {
      document.querySelector(".highscore").textContent = score;
    }
    // When guess not matches with secret number.
  } else if (guess !== SecretNum) {
    if (score > 1) {
      guess > SecretNum
        ? DisplayMessage("Too High")
        : DisplayMessage("Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      DisplayMessage("You Loose the Game.");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// To play this game again..
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  SecretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(SecretNum);
  DisplayMessage("Start Guessing..");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
});
