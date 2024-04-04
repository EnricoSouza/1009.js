var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var nota1 = parseFloat(prompt());
var nota2 = parseFloat(prompt());
var i = 0

if(nota1 < 0 || nota1 > 10){
    
    while(nota1 < 0 || nota1 > 10){
        console.log('nota invalida');
        var nota1 = parseFloat(prompt());
    }
    
}

if(nota2 < 0 || nota2 > 10){

    while(nota2 < 0 || nota2 > 10){
        console.log('nota invalida');
        var nota2 = parseFloat(prompt());
    }

}

else{
    
    var lemonsgenio = (nota1 + nota2) / 2 
    console.log('media = ' + lemonsgenio.toFixed(2));
}
