var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var X = parseInt(prompt());
var Y = parseInt(prompt());

if((X + Y) % 2 === 0){
    console.log('1');
}

else{
    console.log('0');
}
