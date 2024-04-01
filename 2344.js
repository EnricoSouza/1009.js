var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var nota = parseInt(prompt());

if(nota === 0){
    console.log('E');
}

else if(nota >= 1 && nota <= 35){
    console.log('D');
}

else if(nota > 35 && nota <= 60){
    console.log('C');
}

else if(nota > 60 && nota <= 85){
    console.log('B');
}

else if(nota > 85 && nota <= 100){
    console.log('A');
}
