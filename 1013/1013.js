var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var [a,b,c] = lines.map(Number);

const maiorAB = (a+b + Math.abs(a-b))/2;

const maiorTotal = (maiorAB+c + Math.abs(maiorAB-c))/2;

console.log(`${maiorTotal} eh o maior`);