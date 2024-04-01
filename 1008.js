var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var n = parseInt(prompt());
var horas = parseInt(prompt());
var valor = parseFloat(prompt());
var salario = horas * valor;

console.log("NUMBER = " + n);
console.log("SALARY = U$ " + salario.toFixed(2));
