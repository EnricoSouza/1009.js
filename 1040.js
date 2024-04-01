var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
var [A,B,C,D] = entrada.split(" ");
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);
D = parseFloat(D);

MEDIA = ((A * 2) + (B * 3) + (C * 4) + (D * 1)) / 10
   
console.log('Media: ' + MEDIA.toFixed(1));

if(MEDIA >= 7){
   console.log('Aluno aprovado.');
   }

else if(MEDIA < 5){
   console.log('Aluno reprovado.');
   }

else if(MEDIA >= 5 && MEDIA <= 6.9){
   console.log('Aluno em exame.');
   NotaExame = parseFloat(prompt());
MediaExame = (NotaExame + MEDIA) / 2

   console.log('Nota do exame: ' + NotaExame.toFixed(1));

if(MediaExame >= 5){
   console.log('Aluno aprovado.');
  }
  
else{
   console.log('Aluno reprovado');
   }
  
   console.log('Media final: ' + MediaExame.toFixed(1));
   }   
