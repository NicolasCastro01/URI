var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

const pi = 3.14159;
const A = pi*(lines*lines); 

console.log(`A=${A.toFixed(4)}`);