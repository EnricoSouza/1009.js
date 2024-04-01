var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseFloat(prompt("valor do raio"));
var area = 3.14159 * x ** 2;

console.log("A=" + area.toFixed(4));
