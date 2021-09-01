var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

var timeX = Number(lines[0]);
var timeY = Number(2*timeX);

console.log(`${timeY} minutos`)