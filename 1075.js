var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var lamppz = parseInt(prompt());
var i = 2

while(i < 10000){
    console.log(i);
    calculolamppz = lamppz % i === 2
    i = i + lamppz
}
