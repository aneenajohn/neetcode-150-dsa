//? QUESTION
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

//* SOLUTION:
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// M1 => Accepted Solution:
const isAnagram = function (s, t) {
  if (t.length !== s.length) {
    return false;
  } else {
    const lettersOfS = s.split("");
    const lettersOfT = t.split("");
    let keysOfS = {},
      keysOfT = {};
    const returnFreqObj = (arr, obj) => {
      for (const element of arr) {
        if (obj[element]) {
          obj[element] += 1;
        } else {
          obj[element] = 1;
        }
      }
    };

    returnFreqObj(lettersOfS, keysOfS);
    returnFreqObj(lettersOfT, keysOfT);

    const arrS = Object.entries(keysOfS);
    const arrT = Object.entries(keysOfT);

    return JSON.stringify(arrS.sort()) === JSON.stringify(arrT.sort());
  }
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("rat", "care"));
