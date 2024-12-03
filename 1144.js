var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var n = parseInt(prompt());
var i = 1
var x = 1
var y = 1


while(i <= n){
    console.log(x + ' ' + (y * x) + ' ' + (x ** 3));
    console.log(x + ' ' + (y * x + 1) + ' ' + ((x ** 3) + 1));
    i++
    x++
    y++
    
}
