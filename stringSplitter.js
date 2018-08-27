'use strict';

/*
input: 'Hello-Goodbye', -
output: ['Hello, Goodbye']
input to each recursive call: String without the first str
output of each recursive call: str seperated at the seperator
*/

let stringSplitter = (str, seperator) => {
  //base case
  if (str.length === 0) {
    return [];
  }
  if (str.indexOf(seperator) === -1) {
    return [str];
  }
  if (seperator === '') {
    return [str[0], ...stringSplitter(str.slice(1), seperator)];
  }
  // const index = str.indexOf(seperator);
  return [str.slice(0, str.indexOf(seperator)), ...stringSplitter(str.slice(str.indexOf(seperator) + 1),seperator)];
};

console.log(stringSplitter('Hello-Goodbye', '-'));
console.log(stringSplitter('Hello-Goodbye-Fun', '-'));
console.log(stringSplitter('Hello-Goodbye', ''));

let stringSplitterIt = (str, seperator) => {
  let arr = [];
  let index = str.indexOf(seperator);

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i)===seperator) {
      arr.push(str.slice(0, index));
    }
    // if (index === -1) {
    //   arr.push(str);

    // }
    if (seperator === '') {
      arr.push(str[i]);
    
    }
  }
  arr.push(str.slice(index + 1));
  return arr;  
};

console.log(stringSplitterIt('Hello-Goodbye', '-'));
console.log(stringSplitterIt('Hello-Goodbye', ''));