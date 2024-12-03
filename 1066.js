var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var a = parseInt(prompt());
var b = parseInt(prompt());
var c = parseInt(prompt());
var d = parseInt(prompt());
var e = parseInt(prompt());

var par = 0
var impar = 0
var positivo = 0
var negativo = 0

if(a > 0){
	positivo++
}

if(a < 0){
	negativo++
}

if(a % 2 === 0){
	par++
}

if(a % 2 === 1){
	impar++
}

if(b > 0){
	positivo++
}

if(b < 0){
	negativo++
}

if(b % 2 === 0){
	par++
}

if(b % 2 === 1){
	impar++
}

if(c > 0){
	positivo++
}

if(c < 0){
	negativo++
}

if(c % 2 === 0){
	par++
}

if(c % 2 === 1){
	impar++
}

if(d > 0){
	positivo++
}

if(d < 0){
	negativo++
}

if(d % 2 === 0){
	par++
}

if(d % 2 === 1){
	impar++
}

if(e > 0){
	positivo++
}

if(e < 0){
	negativo++
}

if(e % 2 === 0){
	par++
}

if(e % 2 === 1){
	impar++
}

console.log(par + ' valor(es) par(es)');
console.log(impar + ' valor(es) impar(es)');
console.log(positivo + ' valor(es) positivo(s)');
console.log(negativo + ' valor(es) negativo(s)');
