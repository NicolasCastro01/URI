var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

var [ timeTravel, vm] = lines.map(Number);

const totalL = parseFloat((vm/12)*timeTravel);

console.log(totalL.toFixed(3));