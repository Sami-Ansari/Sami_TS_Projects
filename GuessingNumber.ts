#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

(async () => {
    await showBanner('GuessingGame', 'Guess to win ',"red");
})()


let randomNumber: number = Math.ceil((Math.random()*10))
let i =1


async function  guessingNumber(call:any){
    console.log(chalk.magentaBright("In first stage guess the number from 1 to 10"));
    let answer: any = await inquirer.prompt([{
        name: "Usernumber",
        type: "number",
        message: "Enbter any number "
    }]);

    call(guess)
}
   async function guess(answer: { Usernumber: number; }){
    while(randomNumber != answer.Usernumber ){  
    console.log(chalk.yellow("try again !!!"));
     answer = await inquirer.prompt([{
        name: "Usernumber",
        type: "number",
        message: "Enter any number "
    }]);
    i++
    }
    console.log(chalk.blue("You guess a correct number"));
    console.log(chalk.magentaBright(`You guess the number is ${i} attempts`));
}

setTimeout(()=>{
guessingNumber(guess)
    
},1000)