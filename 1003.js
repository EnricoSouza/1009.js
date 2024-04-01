var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var a = parseInt(prompt("var A"));
var b = parseInt(prompt("var B"));
var soma = a + b;

console.log("SOMA = " + soma);
