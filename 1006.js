var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var a = parseFloat(prompt());
var b = parseFloat(prompt());
var c = parseFloat(prompt());
var nota = ( a * 2 + b * 3 + c * 5) / 10;

console.log("MEDIA = " + nota.toFixed(1));
