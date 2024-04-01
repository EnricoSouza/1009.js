var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valor = parseFloat(prompt());
console.log('NOTAS:')

var notacem = Math.floor(valor / 100);
restocem = valor % 100
console.log(notacem + ' nota(s) de R$ 100.00');

var notacinquenta = Math.floor(restocem / 50);
restocinquenta = restocem % 50
console.log(notacinquenta + ' nota(s) de R$ 50.00');

var notavinte = Math.floor(restocinquenta / 20);
restovinte = restocinquenta % 20
console.log(notavinte + ' nota(s) de R$ 20.00');

var notadez = Math.floor(restovinte / 10);
restodez = restovinte % 10
console.log(notadez + ' nota(s) de R$ 10.00');

var notacinco = Math.floor(restodez / 5);
restocinco = restodez % 5
console.log(notacinco + ' nota(s) de R$ 5.00');

var notadois = Math.floor(restocinco / 2);
restodois = restocinco % 2
console.log(notadois + ' nota(s) de R$ 2.00');

console.log('MOEDAS:');

var moedaum = Math.floor(restodois / 1);
restomoedaum = restodois % 1
console.log(moedaum + ' moeda(s) de R$ 1.00');

var moedacinquenta = Math.floor(restomoedaum / 0.50);
restomoedacinquenta = restomoedaum % 0.50
console.log(moedacinquenta + ' moeda(s) de R$ 0.50');

var moedavintecinco = Math.floor(restomoedacinquenta / 0.25);
restomoedavintecinco = restomoedacinquenta % 0.25
console.log(moedavintecinco + ' moeda(s) de R$ 0.25');

var moedadez = Math.floor(restomoedavintecinco / 0.10);
restomoedadez = restomoedavintecinco % 0.10
console.log(moedadez + ' moeda(s) de R$ 0.10');

var moedacinco = Math.floor(restomoedadez / 0.05);
restomoedacinco = restomoedadez % 0.05 + 0.0001
console.log(moedacinco + ' moeda(s) de R$ 0.05');

var moedaumcentavo = Math.trunc(restomoedacinco / 0.01)
console.log(moedaumcentavo + ' moeda(s) de R$ 0.01');
