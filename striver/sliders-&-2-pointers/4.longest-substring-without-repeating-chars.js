//? QUESTION
// Given a String, find the length of longest substring without any repeating character.

const s = 'abcabcbb';
const t = 'cadbzabcd';

function lengthOfLongestSubstring(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let seenChars = new Set();
    let currentLength = 0;

    for (let j = i; j < s.length; j++) {
      //DOCS: TC - O(n*n) - O(n^2)
      console.log(seenChars);
      if (seenChars.has(s[j])) {
        break; // Stop if we find a repeating character
      }

      seenChars.add(s[j]);
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}

console.log('Maxlength: ', lengthOfLongestSubstring(t));

// DOCS: Optimise with 2 pointers and sliding window
function longestSubWithoutRepeatingChar(s) {
  let start = 0,
    maxLength = 0;

  let charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    let currentChar = s[end];
    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      start = charMap.get(currentChar) + 1;
    }
    charMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log('Optimised: ', longestSubWithoutRepeatingChar(t));
