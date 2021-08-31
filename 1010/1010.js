var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');


var A = lines[0];
var B = lines[1];

var sepA = A.split(' ');
var sepB = B.split(' ');

var idA = Number(sepA[0]);
var qA = Number(sepA[1]);
var vA = parseFloat(sepA[2]);

var idB = Number(sepB[0]);
var qB = Number(sepB[1]);
var vB = parseFloat(sepB[2]);

const Total = parseFloat(qA * vA) + parseFloat(qB * vB);

console.log(`VALOR A PAGAR: R$ ${Total.toFixed(2)}`);