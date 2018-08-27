'use strict';

/*
input:
output:
input to each recursive call:
output of each recursive call:
*/

const binaryRep = (input) => {
  if (input <= 0) {
    return '';
  }
  const binaryStr = Math.floor(input % 2);
  return binaryRep(Math.floor(input/2)) + binaryStr;
};

console.log(binaryRep(3));