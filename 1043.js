var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();

var [A,B,C] = entrada.split(" ");
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

AREA = ((A + B) * C) / 2
PERIMETRO = A + B + C

if(A < (B + C) && B < (A + C) && C < (A + B)){
   console.log('Perimetro = ' + PERIMETRO.toFixed(1));
}
  
else{
   console.log('Area = ' + AREA.toFixed(1));
}
