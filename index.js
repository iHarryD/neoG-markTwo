const readLineSync = require("readline-sync");
const questionsAnswers = {
  "How many founding titans were there in Attack on Titan?": "9",
  "What was Zenitsu's breathing technique in Demon Slayer?": "Thunder",
  "Who won the 'friendly' tennis match between Light and L in Death Note?": "Light",
  "Who was the youngest homonculus in Fullmetal Alchemist?": "Wrath",
  "How many Hashiras were there in season one of Demon Slayer?": "9",
  "What other term did Mitsuha's teacher use for Twilight in Your Name?": "After Light",
  "What family was Levi from in Attack on Titan?": "Ackerman",
  "Who was the first to kill a homonculus in Fullmetal Alchemist?": "Mustang",
  "What alias did L use when he met Light for the first time in Death Note": "Ryuzaki",
  "What's the name of the Upper Three demon in Demon Slayer?": "Akaza"
}

let scoreboard = {};

function theGame() {
  let username = readLineSync.question(`Greetings! May I know your name, please? `);
  let currentScore = 0;
  console.log(`Hello, ${username}! Welcome to the Anime Quiz.\n`);
  for (question in questionsAnswers) {
    let userAnswer = readLineSync.question(`${question} `);
    if (userAnswer.toUpperCase() === questionsAnswers[question].toUpperCase()) {
      currentScore ++;
      console.log(`Correct!\nCurrent score: ${currentScore}`);
    }
    else {
      console.log(`Wrong!\nCorrect answer is: ${questionsAnswers[question]}`);
    }
    console.log(`---------`);
  }
  console.log(`Game over!\nYour final score is: ${currentScore}`);
}

theGame();