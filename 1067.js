var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = parseInt(prompt());
var i = 1

while(i <= entrada){
	console.log(i);
	i += 2
	}
