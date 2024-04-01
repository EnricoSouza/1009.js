var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var [CP1,NP1,VP1] = (prompt(' ').split(" "));
var [CP2,NP2,VP2] = (prompt(' ').split(" "));
var calculo = ((NP1 * VP1) + (NP2 * VP2));

console.log('VALOR A PAGAR: R$ ' + calculo.toFixed(2));
