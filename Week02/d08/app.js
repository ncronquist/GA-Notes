var myModule = require("./myModule.js")
var chalk = require('chalk');

// Style a string
console.log(chalk.blue('Hello World!'));

console.log(chalk.green("something"));

console.log(myModule);

myModule.taco(); // Tacos are good.
