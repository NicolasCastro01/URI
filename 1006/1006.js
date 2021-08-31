var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A,B,C] = lines.map(parseFloat);

const MEDIA = (A * 2 + B * 3 + C * 5)/10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`)