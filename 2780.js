var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var d = parseInt(prompt());

if(d <= 800){
    console.log('1');
}

else if(d > 800 && d <= 1400){
    console.log('2');
}

else if(d > 1400 && d <= 2000){
    console.log('3');
}
