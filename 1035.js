var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
var [A,B,C,D] = entrada.split(" ");

A = parseInt(A);
B = parseInt(B);
C = parseInt(C);
D = parseInt(D);

somaCD = C + D
somaAB = A + B

if(B > C && D > A && somaCD > somaAB && A % 2 === 0 && C > 0 && D > 0){
    console.log('Valores aceitos');
}

else{
    console.log('Valores nao aceitos');
}
