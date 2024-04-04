var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
    var [X,Y] = entrada.split(" ");
    X = parseInt(X);
    Y = parseInt(Y);

while(X != Y){
    
    if(X > Y){
        console.log('Decrescente');
}

    if(X < Y){
        console.log('Crescente');
}
    
    var entrada = prompt();
    var [X,Y] = entrada.split(" ");
    X = parseInt(X);
    Y = parseInt(Y);
}
