var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
var [A,B] = entrada.split(" ");
A = parseInt(A);
B = parseInt(B);

if((A % B) == 0 || (B % A) == 0){
  console.log('Sao Multiplos');
  }
  
else{
  console.log('Nao sao Multiplos');
  }
