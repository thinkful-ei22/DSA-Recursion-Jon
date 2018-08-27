'use strict';

/*
input: [1,2,3]
output:[2,4,6]
input to each recursive call: array - array[0]
output of each recursive call: arr[i *2]
*/

function arrayDouble(array) {
  // Base Case
  if (array.length === 0 ) {
    return [];
  }
  return[(array[0] * 2), ...arrayDouble(array.slice(1))];
}

console.log(arrayDouble([1,2,3]));


function arrayDoubleIt(array) {
  arrayDoubleIt.map(num => num * 2);
}

console.log(arrayDouble([1,2,3]));