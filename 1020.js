var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var dias = parseInt(prompt('dias:'));

var idadeanos = Math.floor(dias / 365);
dias = dias % 365

var idademeses = Math.floor(dias / 30);
restomeses = dias % 30

console.log(idadeanos + ' ano(s)');
console.log(idademeses + ' mes(es)');
console.log(restomeses + ' dia(s)');
