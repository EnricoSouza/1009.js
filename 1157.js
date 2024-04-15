var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var fifa = parseInt(prompt());
var i = 1

console.log('1');

while(i <= fifa){
    i++
    if(fifa % i === 0){
        console.log(i);
    }
}
