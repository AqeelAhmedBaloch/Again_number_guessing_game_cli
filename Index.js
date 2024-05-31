#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`===============================`);
console.log(`Welcome to Number Guessing Game`);
console.log(`===============================\n`);
const secretNumber = Math.floor(Math.random() * 10 + 1);
let myLoop = true;
let attempts = 1;
while (myLoop) {
    const userInput = await inquirer.prompt({
        type: "number",
        name: "userNumber",
        message: "Enter Your Number:- ",
    });
    let { userNumber } = userInput;
    console.log(`\nYour attemped No.${attempts}`);
    if (userNumber === secretNumber)
        woMatch();
    if (userNumber > secretNumber)
        greaterNum();
    if (userNumber < secretNumber)
        lessNum();
    function woMatch() {
        console.log(`Congratulations! Your guessed number ${userNumber} is correct!`);
        console.log(`\nYou have attemped ${attempts} time to guess the right number!`);
        myLoop = false;
    }
    function greaterNum() {
        console.log(`Your guessed number is greater than actual number!`);
        attempts++;
    }
    function lessNum() {
        console.log(`Your guessed number is less than actual number!`);
        attempts++;
    }
}
