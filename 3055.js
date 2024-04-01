var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A = parseInt(prompt());
var media = parseInt(prompt());

B = media * 2 - A

console.log(B)
