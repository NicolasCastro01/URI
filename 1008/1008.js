var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

var funNumber = Number(lines[0]);
var workedHours = Number(lines[1]);
var money = parseFloat(lines[2]);

const Salary = parseFloat(workedHours * money);

console.log(`
    NUMBER = ${funNumber}\n
    SALARY = U$ ${Salary.toFixed(2)}
`)