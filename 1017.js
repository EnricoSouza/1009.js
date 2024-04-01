var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var tempo = parseInt(prompt());
var vel = parseInt(prompt());
var comb = (tempo * vel) / 12

console.log(comb.toFixed(3));
