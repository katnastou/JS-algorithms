const {performance} = require('perf_hooks');

function addUpTo(n) {
    let total = 0;
    for(let i=1;i<=n;i++){
        total +=i;
    }
    return total;
}

var sum = addUpTo(9);
//console.log(sum);

function addUpTo2(n){
    return n*(n+1)/2;
}

var sum2 = addUpTo2(5);
//console.log(sum2);

let t1 = performance.now();
addUpTo2(1000000000);
let t2 = performance.now();
console.log(`time elapsed: ${(t2-t1)/1000} seconds.`);


