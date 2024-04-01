var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var ossos = (prompt());
var tipo = (prompt());
var alimento = (prompt());


if(ossos == "vertebrado" && tipo == "ave" && alimento == "carnivoro"){
  console.log('aguia');
  }

else if(ossos == "vertebrado" && tipo == "ave" && alimento == "onivoro"){
	console.log('pomba');
	}

else if(ossos == "vertebrado" && tipo == "mamifero" && alimento == "onivoro"){
	console.log('homem');
	}
	
else if(ossos == "vertebrado" && tipo == "mamifero" && alimento == "herbivoro"){
	console.log('vaca');
	}
	
else if(ossos == "invertebrado" && tipo == "inseto" && alimento == "hematofago"){
	console.log('pulga');
	}
	
else if(ossos == "invertebrado" && tipo == "inseto" && alimento == "herbivoro"){
	console.log('lagarta');
	}

else if(ossos == "invertebrado" && tipo == "anelideo" && alimento == "hematofago"){
	console.log('sanguessuga');
	}
	
else if(ossos == "invertebrado" && tipo == "anelideo" && alimento == "onivoro"){
	console.log('minhoca');
	}       
