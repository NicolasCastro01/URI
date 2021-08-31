var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

var [A,B] = lines.map(Number);

const SOMA = A + B;

console.log(`SOMA = ${SOMA}`);