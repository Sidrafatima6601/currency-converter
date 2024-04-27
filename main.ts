#! /usr/bin/env node

import inquirer from "inquirer";

// define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1, //base currency
    "EUR": 0.9, //european currency
    "JYP": 113, //japanese currency
    "CAD": 1.3, //canadian dollar
    "AUD": 1.65, //australian dollar
    "PAK": 280, //pakistani rupee
    //Add more currencies and their exchange rates here
}

//promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PAK"]

    },
    {
        name: "to currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PAK"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert"
    }
]);

//perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//display the converted amount
console.log(`converted amount = ${converted_amount}`);             
