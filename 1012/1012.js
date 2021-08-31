var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split(' ');

var [A,B,C] = lines.map(parseFloat);
const pi = 3.14159;

const aT = parseFloat((A * C)/2);
const aC = parseFloat(pi*Math.pow(C,2));
const aTrap = parseFloat(((A+B)*C)/2);
const aQ = parseFloat(Math.pow(B,2));
const aR = parseFloat(A*B);

console.log(`TRIANGULO: ${aT.toFixed(3)}\nCIRCULO: ${aC.toFixed(3)}\nTRAPEZIO: ${aTrap.toFixed(3)}\nQUADRADO: ${aQ.toFixed(3)}\nRETANGULO: ${aR.toFixed(3)}`)