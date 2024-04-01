var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt("variavel A"));
var y = parseInt(prompt("variavel B"));
var z = x + y;

console.log("X = " + z);
