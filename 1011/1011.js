var input = require('fs').readFileSync('stdin','utf8');
var R = parseFloat(input);

const pi = 3.14159;

const Volume = (4/3) * pi * Math.pow(R,3);

console.log(`VOLUME = ${Volume.toFixed(3)}`);