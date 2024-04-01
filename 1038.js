var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
var [A,B] = entrada.split(" ");
A = parseInt(A);
B = parseInt(B);

CachorroQuente = B * 4
Xsalada = B * 4.50
Xbacon = B * 5
TorradaSimples = B * 2
Refrigerante = B * 1.50

if (A == 1){
   console.log('Total: R$ ' + CachorroQuente.toFixed(2));
   }
  
else if (A == 2){
   console.log('Total: R$ ' + Xsalada.toFixed(2));
   }
  
else if (A == 3){
   console.log('Total: R$ ' + Xbacon.toFixed(2));
   }
  
else if (A == 4){
   console.log('Total: R$ ' + TorradaSimples.toFixed(2));
   }
  
else{
   console.log('Total: R$ ' + Refrigerante.toFixed(2));
   }
