var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var N = parseInt(prompt());
var i = 0

while(i < N){
	var lemons = parseInt(prompt());
	
	if(lemons > 0 && lemons % 2 === 0){
		console.log('EVEN POSITIVE');
		}
	
	else if(lemons < 0 && lemons % 2 === 0){
		console.log('EVEN NEGATIVE');
		}
	
	else if(lemons > 0 && lemons % 2 === 1){
		console.log('ODD POSITIVE');
		}
	
	else if(lemons < 0 && lemons % 2 === -1){
		console.log('ODD NEGATIVE');
		}
		
	else if(lemons === 0){
		console.log('NULL');
		}
		
		i++
		
		}
