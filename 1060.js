var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A = parseFloat(prompt());
var B = parseFloat(prompt());
var C = parseFloat(prompt());
var D = parseFloat(prompt());
var E = parseFloat(prompt());
var F = parseFloat(prompt());

var TEEMO = 0

if(A > 0){
	TEEMO++
}

if(B > 0){
	TEEMO++
}

if(C > 0){
	TEEMO++
}

if(D > 0){
	TEEMO++
}

if(E > 0){
	TEEMO++
}

if(F > 0){
	TEEMO++
}

console.log(TEEMO + ' valores positivos');
