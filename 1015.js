var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var [x1,y1] = (prompt()).split(" ").map(num => (num));
var [x2,y2] = (prompt()).split(" ").map(num => (num));

distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distancia.toFixed(4));
