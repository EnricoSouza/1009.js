var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var numero = parseInt(prompt());
var tabua1 = numero * 1
var tabua2 = numero * 2
var tabua3 = numero * 3
var tabua4 = numero * 4
var tabua5 = numero * 5
var tabua6 = numero * 6
var tabua7 = numero * 7
var tabua8 = numero * 8
var tabua9 = numero * 9
var tabua10 = numero * 10

console.log('1 x ' + numero + ' = ' + tabua1);
console.log('2 x ' + numero + ' = ' + tabua2);
console.log('3 x ' + numero + ' = ' + tabua3);
console.log('4 x ' + numero + ' = ' + tabua4);
console.log('5 x ' + numero + ' = ' + tabua5);
console.log('6 x ' + numero + ' = ' + tabua6);
console.log('7 x ' + numero + ' = ' + tabua7);
console.log('8 x ' + numero + ' = ' + tabua8);
console.log('9 x ' + numero + ' = ' + tabua9);
console.log('10 x ' + numero + ' = ' + tabua10);
