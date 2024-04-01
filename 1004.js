var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt());
var y = parseInt(prompt());
var prod = x * y;

console.log("PROD = " + prod);
