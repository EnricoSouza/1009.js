var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var oilamppz = parseInt(prompt());
var i1 = 1
var i2 = 1
var i3 = 1

while(i1 <= oilamppz){
    console.log(i1 + ' ' + i2 + ' ' + i3);
    i1++
    i2 = i1 ** 2
    i3 = i1 ** 3
}
