var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

var X = lines[0];
var Y = lines[1];
var p1 = X.split(' ');
var x1 = parseFloat(p1[0]);
var y1 = parseFloat(p1[1]);

var p2 = Y.split(' ');
var x2 = parseFloat(p2[0]);
var y2 = parseFloat(p2[1]);

const distancia = Math.sqrt(Math.pow(parseFloat(x2-x1),2)+Math.pow(parseFloat(y2-y1),2));

console.log(distancia.toFixed(4));