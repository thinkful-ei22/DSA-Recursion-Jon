'use strict';

/*
input: 'string'
output: 'gnirts'
input to each recursive call: string - last charac
output of each recursive call: charac + rest of string
*/

let reverseString = (string) => {
  //Base case 
  if(string.length <= 0) {
    return '';
  }
  //Recrusive case
  return string.slice(-1) + reverseString(string.slice(0, -1));
};

console.log(reverseString('string'));
console.log(reverseString('Hello'));

let reverseStringIt = (string) => {
  let newString = [];
  for (let i=0; i < string.length; i++) {
    newString.push(string.charAt(i));
  }
  return newString.reverse().join('');
};

console.log(reverseStringIt('Goodbye'));