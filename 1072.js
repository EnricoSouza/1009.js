var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var X = parseInt(prompt());
var i = 0
var lemons = 0
var lamppz = 0

while(i < X){ 

    var Y = parseInt(prompt());

    if(Y >= 10 && Y <= 20){
        lemons++
    }

    if(Y < 10 || Y > 20){
        lamppz++
    }
    i++
}   

console.log(lemons + ' in');
console.log(lamppz + ' out');
