var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

var name = lines[0];
var fixedSalary = parseFloat(lines[1]);
var totalSalesMade = parseFloat(lines[2]);

const montant = ((15/100)*parseFloat(totalSalesMade)) + parseFloat(fixedSalary)

console.log(`TOTAL = R$ ${montant.toFixed(2)}`)