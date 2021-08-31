var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

var [A,B,C,D] = lines.map(Number);

const DIFERENCA = (A * B - C * D);

console.log(`DIFERENCA = ${DIFERENCA}`)