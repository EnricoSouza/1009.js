var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var yanzinho = parseInt(prompt());

if(yanzinho % 2 == 0){
    console.log(yanzinho + 1);
    console.log(yanzinho + 3);
    console.log(yanzinho + 5);
    console.log(yanzinho + 7);
    console.log(yanzinho + 9);
    console.log(yanzinho + 11);
}

else{
    console.log(yanzinho);
    console.log(yanzinho + 2);
    console.log(yanzinho + 4);
    console.log(yanzinho + 6);
    console.log(yanzinho + 8);
    console.log(yanzinho + 10);
}
