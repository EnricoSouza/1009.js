var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var N = parseInt(prompt());
var i = 0

while(i < N){
	var entrada = prompt();
	var [X,Y] = entrada.split(" ");
	
	X = parseInt(X);
	Y = parseInt(Y);
	
	if(Y === 0){
		console.log('divisao impossivel');
		}
	
	else if(X === 0){
		console.log('0.0');
		}
	 
	else{
		console.log((X / Y).toFixed(1));
		}
	    i++
	  }
