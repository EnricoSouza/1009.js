var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var lemons = parseInt(prompt());

while(lemons != 2002){
	var lemons = parseInt(prompt());
	console.log('Senha Invalida');
	}
	
	console.log('Acesso Permitido');
