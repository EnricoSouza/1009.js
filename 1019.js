var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var tempo = parseInt(prompt());

var horas = Math.floor(tempo / 3600);
restohoras = tempo % 3600

var minutos = Math.floor(restohoras / 60);
restominutos = restohoras % 60

console.log(horas + ':' + minutos + ':' + restominutos);
