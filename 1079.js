var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var N = parseInt(prompt());
var i = 0

while(i < N){
	var yanzinho = prompt();
	var [A,B,C] = yanzinho.split(" ");
	
	A = parseFloat(A);
	B = parseFloat(B);
	C = parseFloat(C);
	
	var media = ((A * 2) + (B * 3) + (C * 5)) / 10
	
	console.log(media.toFixed(1));
	
	i++
	}
