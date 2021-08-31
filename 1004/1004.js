var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

var [A,B] = lines.map(Number);

const PROD = A * B;

console.log(`PROD = ${PROD}`)