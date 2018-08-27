'use strict';

/* 
input: 3
output: 3
input from each recursion call: -1
output from each recursion call: ${} - Another sheep...
*/

function countSheep(num) {
  // Base Case
  if ( num === 0) {
    return;
  }
  //General Case
  console.log(`${num} - Another sheep jumped over the fence`);
  countSheep(num - 1);
}

countSheep(4);

//Iterative

function countSheepIt(num) {
  for (let i = num; i > 0; i--) {
    console.log(`${i} - Another sheep jumped over the fence`);
  }
}

countSheepIt(4);