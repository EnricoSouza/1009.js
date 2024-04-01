var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valor = parseInt(prompt('insira um valor: '));
console.log(valor);

var notacem = Math.floor(valor / 100);
console.log(notacem + ' nota(s) de R$ 100,00');
restocem = valor % 100

var notacin = Math.floor(restocem / 50);
console.log(notacin + ' nota(s) de R$ 50,00');
restocin = restocem % 50

var notavinte = Math.floor(restocin / 20);
console.log(notavinte + ' nota(s) de R$ 20,00');
restovinte = restocin % 20

var notadez = Math.floor(restovinte / 10);
console.log(notadez + ' nota(s) de R$ 10,00');
restodez = restovinte % 10

var notacinco = Math.floor(restodez / 5);
console.log(notacinco + ' nota(s) de R$ 5,00');
restocinco = restodez % 5

var notadois = Math.floor(restocinco / 2);
console.log(notadois + ' nota(s) de R$ 2,00');
restodois = restocinco % 2

var notaum = Math.floor(restodois / 1);
console.log(notaum + ' nota(s) de R$ 1,00');
