var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
var [X,Y] = entrada.split(" ");
X = parseInt(X);
Y = parseInt(Y);

while(X != 0 || Y != 0){
    
    if(X < 0 && Y > 0){
        console.log('segundo');
    }

    else if(X > 0 && Y < 0){
        console.log('quarto');
    }
    
    else if(X < 0 && Y < 0){
        console.log('terceiro');
    }
    
    else if(X > 0 && Y > 0){
        console.log('primeiro');
    }

    var entrada = prompt();
    var [X,Y] = entrada.split(" ");
    X = parseInt(X);
    Y = parseInt(Y);
}
