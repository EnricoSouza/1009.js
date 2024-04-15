var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var i = 0

while(i < 202){
    
    var reclamacao = parseInt(prompt());

    if(reclamacao === 0){
        console.log('vai ter copa!');
    }

    if(reclamacao != 0){
        console.log('vai ter duas!');
    }
    i++
}
