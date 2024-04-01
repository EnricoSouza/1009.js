var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseFloat(prompt("nota 1"));
var y = parseFloat(prompt("nota 2"));
var nota = (x * 3.5 + y * 7.5) / 11;

console.log("MEDIA = " + nota.toFixed(5));
