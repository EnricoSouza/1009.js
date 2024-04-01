var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var distancia = parseInt(prompt());
var combustivel = parseFloat(prompt());
var consumo = distancia / combustivel;

console.log(consumo.toFixed(3) + ' km/l');
