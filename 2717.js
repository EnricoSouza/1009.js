var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var N = parseInt(prompt());
var entrada = prompt();
var [a,b] = entrada.split(" ");

a = parseInt(a);
b = parseInt(b);
var somaab = a + b

if(N >= somaab){
    console.log('Farei hoje!');
}

else{
    console.log('Deixa para amanha!');
}
