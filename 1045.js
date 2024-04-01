var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
var [A,B,C] = entrada.split(" ").sort((A, B) => B - A);
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);
 
if(A >= (B + C)){
    console.log('NAO FORMA TRIANGULO');
}
  
else{ 
    
if((A ** 2) > ((B ** 2) + (C ** 2))){
    console.log('TRIANGULO OBTUSANGULO');
}

if((A ** 2) < ((B ** 2) + (C ** 2))){
    console.log('TRIANGULO ACUTANGULO');
}

if(A == B && A == C && C == B){
    console.log('TRIANGULO EQUILATERO');
}

if((A == B && B !== C) || (B == C && C !== A) || (A == C && C !== B)){
    console.log('TRIANGULO ISOSCELES');
}

if((A ** 2) == ((B ** 2) + (C ** 2))){
    console.log('TRIANGULO RETANGULO');
}
}
