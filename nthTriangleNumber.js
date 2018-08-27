'use strict';

/*
input:
output:
input to each recursive call:
output of each recursive call:
*/

function nthTrianglularNumber(num) {
  if (num === 0 ) {
    return 0;
  }
  return num + nthTrianglularNumber(num - 1);
}

console.log(nthTrianglularNumber(6));
console.log(nthTrianglularNumber(5));
console.log(nthTrianglularNumber(4));
console.log(nthTrianglularNumber(3));
console.log(nthTrianglularNumber(2));
console.log(nthTrianglularNumber(1));

let triangleIt(num) {
  let triNum = 0;
  
}