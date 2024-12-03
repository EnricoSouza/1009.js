var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var lamppz = prompt();
var [a,b,c] = lamppz.split(" ");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if(a > (b + c) || b > (a + c) || c > (a + b) || a == (b + c) || b == (a + c) || c == (a + b)){
    console.log('Invalido');
}

else{
    
    if(a === b && a === c && c === b){
        console.log('Valido-Equilatero');
    }

    if((a == b && a != c) || (a == b && b != c) || (a == c && a != b) || (a == c && c != b) || (b == c && b != a) || (b == c && c != a)){
        console.log('Valido-Isoceles');    
    }

    if(a != b && a != c && b != c){
        console.log('Valido-Escaleno');
    }

    if((a ** 2) == (b ** 2) + (c ** 2) || (b ** 2) == (a ** 2) + (c ** 2) || (c ** 2) == (b ** 2) + (a ** 2)){
        console.log('Retangulo: S');
    }

    else{
        console.log('Retangulo: N');
    }
}
