var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var salario = parseFloat(prompt());

aumento15 = salario * 15 / 100
aumento12 = salario * 12 / 100
aumento10 = salario * 10 / 100
aumento7 = salario * 7 / 100
aumento4 = salario * 4 / 100

if(salario >= 0 && salario <= 400){
  console.log('Novo salario: ' + (salario + aumento15).toFixed(2));
  console.log('Reajuste ganho: ' + aumento15.toFixed(2));
  console.log('Em percentual: 15 %');
  }

else if(salario > 400 && salario <= 800){
  console.log('Novo salario: ' + (salario + aumento12).toFixed(2));
  console.log('Reajuste ganho: ' + aumento12.toFixed(2));
  console.log('Em percentual: 12 %');
  }
  
else if(salario > 800 && salario <= 1200){
  console.log('Novo salario: ' + (salario + aumento10).toFixed(2));
  console.log('Reajuste ganho: ' + aumento10.toFixed(2));
  console.log('Em percentual: 10 %');
  }
  
else if(salario > 1200 && salario <= 2000){
  console.log('Novo salario: ' + (salario + aumento7).toFixed(2));
  console.log('Reajuste ganho: ' + aumento7.toFixed(2));
  console.log('Em percentual: 7 %');
  }
  
else{
  console.log('Novo salario: ' + (salario + aumento4).toFixed(2));
  console.log('Reajuste ganho: ' + aumento4.toFixed(2));
  console.log('Em percentual: 4 %');
  }
