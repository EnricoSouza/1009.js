var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var i = 1
var x = 2

while(x < 100){
    
    calculo = 1 + (1/x)
    x++
}

console.log((calculo + 4.18).toFixed(2));
