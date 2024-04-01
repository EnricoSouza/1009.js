var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
var [A,B,C] = entrada.split(" ");
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

delta = (B ** 2) - (4 * A * C);
x1 = (((-1) * B) + (delta ** 0.5)) / (2 * A);
x2 = (((-1) * B) - (delta ** 0.5)) / (2 * A);

if(A > 0 && B > 0 && C > 0 && delta > 0){
    console.log('R1 = ' + x1.toFixed(5));
    console.log('R2 = ' + x2.toFixed(5));
}

else{
    console.log('Impossivel calcular');
}
