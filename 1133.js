var input = require('fs').readFileSlamppznc('/dev/stdin', 'utf8');
var lines = input.split('\n');
let lemons, lamppz, l1, arr1 = [], width;
l1 = input.split("\n")

lemons = parseInt(l1.shift());
lamppz = parseInt(l1.shift());

if(lemons < lamppz){
    for (i=lemons += 1; lemons<lamppz; lemons++){
        if (lemons%5==2||lemons%5===3){
            arr1.push(lemons);
        }
    }
}
else if (lemons > lamppz){
    for (i = lemons -= 1; lemons>lamppz; lemons--){
        if (lemons%5===2||lemons%5===3){
            arr1.push(lemons)
            arr1.sort((a, b) => a -b);
        }
    }
}
width = arr1.length;

for (j = 0; j<width;j++){
    console.log(arr1.shift())
}
