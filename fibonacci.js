'use strict';

/*
input:
output:
input to each recursive call:
output of each recursive call:
*/

function fib(num) {
  if (num <= 0) {
    return 0;
  }
  if (num <= 2) {
    return 1;
  }
  
  return fib(num - 1 ) + fib(num - 2);
}

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
console.log(fib(5));

let fibonacci = (num) => {
  if (num <= 0) {
    return 0;
  }
  if (num <=2) {
    return 1;
  }
  let arr=[0,1];
  for (let i = 2; i < num; i++) {
    arr.push(i-2 + i-1);
  }
  return arr.join();
};

console.log(fibonacci(5));