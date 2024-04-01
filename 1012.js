var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var [A,B,C] = prompt().split(" ").map(num => parseFloat(num));

Atriangulo = (A * C) / 2
Acirculo = 3.14159 * C ** 2
Atrapezio = ((A + B) * C) / 2
Aquadrado = B ** 2
Aretangulo = A * B

console.log('TRIANGULO: ' + Atriangulo.toFixed(3));
console.log('CIRCULO: ' + Acirculo.toFixed(3));
console.log('TRAPEZIO: ' + Atrapezio.toFixed(3));
console.log('QUADRADO: ' + Aquadrado.toFixed(3));
console.log('RETANGULO: ' + Aretangulo.toFixed(3));
