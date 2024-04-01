var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var nome = prompt();
var salario = parseFloat(prompt());
var vendas = parseFloat(prompt());
var salariototal = salario + 15/100 * vendas;

console.log('TOTAL = R$ ' + salariototal.toFixed(2));
