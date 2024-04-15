var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var i = 1
var J = 60

while(J != 0){
    console.log('I=' + i + ' J=' + J)
    i+=3
    J-=5
}

console.log('I=37 J=0');
