#! /usr/bin/env node
import inquirer from "inquirer";
// 1 computer generate a random number
// 2 user input for gussing number
// 3 compare user input with computer generate number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Guess your number",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulation You Guessed right number");
}
else {
    console.log("Try again you Guessed Wrong number");
}
