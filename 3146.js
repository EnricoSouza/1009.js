var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var raio = parseFloat(prompt());

calculo = 2 * 3.14 * raio

console.log(calculo.toFixed(2));
