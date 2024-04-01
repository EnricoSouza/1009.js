var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var [A,B,C] = (prompt()).split(" ").map(num => parseInt(num));
const maiorAB = (A + B + Math.abs(A - B)) / 2
const maior = (maiorAB + C + Math.abs(C - maiorAB)) / 2

console.log(maior + ' eh o maior');
