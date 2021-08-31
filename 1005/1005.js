var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A,B] = lines.map(parseFloat);

const MEDIA = ((A*3.5)+(B*7.5))/11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`)