var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

const qtdmin = (60 * input) / 30

console.log(qtdmin + ' minutos')
