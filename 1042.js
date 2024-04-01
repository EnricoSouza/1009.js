var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt();
var [A,B,C] = entrada.split(" ");
A = parseInt(A);
B = parseInt(B);
C = parseInt(C);

if(A > B && A > C){
    
  if(B > C){
    console.log(C);
    console.log(B);
    console.log(A);
    }
      
else if(B < C){
    console.log(B);
    console.log(C);
    console.log(A);
    }
}

else if(A > B && A < C){
    console.log(B);
    console.log(A);
    console.log(C);
    }

else if(C > A && C > B && B > A){
    console.log(A);
    console.log(B);
    console.log(C);
    }

else if(B > A && B > C){
    if(A > C){
    console.log(C);
    console.log(A);
    console.log(B);
    }

    else if(A < C){
    console.log(A);
    console.log(C);
    console.log(B);
    }
}

console.log('\n' + A);
console.log(B);
console.log(C);
