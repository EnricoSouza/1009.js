var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
var [A,B] = entrada.split(" ");
A = parseInt(A);
B = parseInt(B);

if(A > B){
  console.log('O JOGO DUROU ' + Math.abs(24 - (A - B)) + ' HORA(S)');
  }

else if(A < B){
  console.log('O JOGO DUROU ' + (B - A) + ' HORA(S)');
  }
 
else{
  console.log('O JOGO DUROU 24 HORA(S)')
  }
