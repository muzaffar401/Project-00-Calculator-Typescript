#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "input",
        name: "firstNumber",
        validate: function (input) {
            if (input === '') {
                return chalk.bold.red('First Number is required');
            }
            const number = parseFloat(input);
            if (isNaN(number)) {
                return chalk.bold.red('Please enter a valid number');
            }
            return true;
        }
    },
    {
        message: "Enter Second Number",
        type: "input",
        name: "secondNumber",
        validate: function (input) {
            if (input === '') {
                return chalk.bold.red('Second Number is required');
            }
            const number = parseFloat(input);
            if (isNaN(number)) {
                return chalk.bold.red('Please enter a valid number');
            }
            return true;
        }
    },
    {
        message: "Enter Operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
const firstNumber = parseFloat(answers.firstNumber);
const secondNumber = parseFloat(answers.secondNumber);
switch (answers.operator) {
    case "Addition":
        console.log(chalk.bold.green(`The Addition of ${chalk.yellow(firstNumber)} and ${chalk.yellow(secondNumber)} is ${chalk.yellow(firstNumber + secondNumber)}`));
        break;
    case "Subtraction":
        console.log(chalk.bold.green(`The Subtraction of ${chalk.yellow(firstNumber)} and ${chalk.yellow(secondNumber)} is ${chalk.yellow(firstNumber - secondNumber)}`));
        break;
    case "Multiplication":
        console.log(chalk.bold.green(`The Multiplication of ${chalk.yellow(firstNumber)} and ${chalk.yellow(secondNumber)} is ${chalk.yellow(firstNumber * secondNumber)}`));
        break;
    case "Division":
        if (secondNumber !== 0) {
            console.log(chalk.bold.green(`The Division of ${chalk.yellow(firstNumber)} and ${chalk.yellow(secondNumber)} is ${chalk.yellow(firstNumber / secondNumber)}`));
        }
        else {
            console.log(chalk.bold.red("Error: Division by zero is not allowed."));
        }
        break;
    default:
        console.log(chalk.bold.red("Invalid operator selected"));
}
