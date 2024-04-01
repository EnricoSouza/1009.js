var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");
var [N,X] = entrada.split(" ");
N = parseInt(N);
X = parseInt(X);

dias = X / (N + 2.0)

console.log(dias.toFixed(2));
