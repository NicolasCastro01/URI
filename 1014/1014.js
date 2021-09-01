var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

var X = Number(lines[0]);
var Y = parseFloat(lines[1]);

const totalFuelExpenditure = parseFloat(X/Y);

console.log(`${totalFuelExpenditure.toFixed(3)} km/l`);