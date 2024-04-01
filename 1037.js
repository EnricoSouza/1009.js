var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var X = parseFloat(prompt());
var saida;

if(X >= 0 && X <= 25.0){
     saida = "Intervalo [0,25]";
}
  
else if(X > 25.0 && X <= 50.0){
     saida = "Intervalo (25,50]";
}
  
else if(X > 50.0 && X <= 75.0){
     saida = "Intervalo (50,75]";
}
  
else if (X > 75.0 && X <= 100.0){
     saida = "Intervalo (75,100]";
}
  
else{
     saida = "Fora de intervalo";
}

console.log(saida);
