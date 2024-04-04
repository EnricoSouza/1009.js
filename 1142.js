var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var N = parseInt(prompt());
var i = 0
var cuukiii = 1

while(i < N){
    console.log([cuukiii] + ' ' + [cuukiii + 1] + ' ' + [cuukiii + 2]  + ' PUM');
    i++
    cuukiii = cuukiii + 4
}
