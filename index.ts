#! /usr/bin/env node

// import inquirer from 'inquirer'


// const Currency: any = {
//     USD: 1, // Base currency
//     EUR: 0.91,
//     GBP: 0.76,
//     INR: 74.57,
//     PKR: 280,
//     DIN: 40
// };

// let user_answer = await inquirer.prompt(
//     [
//         {
//             name: 'from',
//             message: 'Enter From Currency',
//             type: 'list',
//             choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
//         },
//         {
//             name: 'to',
//             message: 'Enter From Currency',
//             type: 'list',
//             choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
//         },
//         {
//             name: 'amount',
//             message: 'Enter Amount',
//             type: 'number'
//         }
//     ]
// );

// let fromAmount = Currency[user_answer.from] // exchange rate
// let toAmount = Currency[user_answer.to] // exchange rate
// let amount = user_answer.amount
// let baseAmount = amount / fromAmount // USD base currency // 4
// let converedAmount = baseAmount * toAmount
// console.log(converedAmount);


// jo comment howa wa hai woh class mn sir wala code hai or jo niche likha wa hai woh mera thoda sa modify kiya wa code hai
















import inquirer from 'inquirer';

interface CurrencyRates {
    [key: string]: number;
}

const Currency: CurrencyRates = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    DIN: 40
};

const user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter From Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
    },
    {
        name: 'to',
        message: 'Enter To Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
    },
    {
        name: 'amount',
        message: 'Enter Amount',
        type: 'number'
    }
]);

const fromAmount: number = Currency[user_answer.from];
const toAmount: number = Currency[user_answer.to];
const amount: number = user_answer.amount;

const baseAmount: number = amount / fromAmount; // USD base currency
const convertedAmount: number = baseAmount * toAmount;

console.log(convertedAmount.toFixed(2)); // Display with 2 decimal places