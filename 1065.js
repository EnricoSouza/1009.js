var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var tekken = parseInt(prompt());
var mortalkombat = parseInt(prompt());
var streetfighter = parseInt(prompt());
var guiltygear = parseInt(prompt());
var kingoffighters = parseInt(prompt());

var i = 0

if(tekken % 2 === 0){
	i++
}

if(mortalkombat % 2 === 0){
	i++
}

if(streetfighter % 2 === 0){
	i++
}

if(guiltygear % 2 === 0){
	i++
}

if(kingoffighters % 2 === 0){
	i++
}

console.log(i + ' valores pares');
