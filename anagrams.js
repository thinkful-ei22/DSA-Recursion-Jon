'use strict';

/*
input:
output:
input to each recursive call:
output of each recursive call:
*/

function anagrams(prefix, str) {
  if(str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++) {
      let current = str.substring(i, i+1);
      let previous = str.substring(0, i);
      let afters = str.substring(i+1);
      anagrams(prefix+current, previous+afters);
    }
  }
}
	
function _anagrams(word) {
  anagrams(' ', word);
}

_anagrams('east');