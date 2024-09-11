// ?QUESTION
// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array of arr[], where arr[i]  is the type of fruit the ith tree produces.
// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow :

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of the baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array of fruits, return the maximum number of fruits you can pick.

// NOTE: I could rephrase this as "Max length subarray with atmost 2 types of numbers"

const arr = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];

const k = 2; //DOCS: k => Number of distinct fruits

// Bruteforce
//TC => O(n^2) SC => O(1)
function maxFruits(arr) {
  let fruitsCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let fruitsSet = new Set();
    for (let j = i; j < arr.length; j++) {
      fruitsSet.add(arr[j]);
      if (fruitsSet.size <= 2) {
        fruitsCount = Math.max(fruitsCount, j - i + 1);
      } else {
        break;
      }
    }
  }
  return fruitsCount;
}

console.log('Res: ', maxFruits(arr));

// Optimised
function maxFruits_v1(arr) {
  let left = 0,
    right = 0,
    maxLength = 0;
  let fruitsMap = new Map();

  //Overall TC = O(n + n) => O(2n)
  //   SC => O(3) => We are storing 3 elements in the map and then erase the one
  while (right < arr.length) {
    // TC=> O(n)
    if (fruitsMap.has(arr[right])) {
      fruitsMap.set(arr[right], fruitsMap.get(arr[right]) + 1);
    } else {
      fruitsMap.set(arr[right], 1);
    }

    while (fruitsMap.size > 2) {
      //TC => O(n)
      let fruitsCount = fruitsMap.get(arr[left]) - 1;
      if (fruitsCount) {
        fruitsMap.set(arr[left], fruitsCount);
      } else {
        fruitsMap.delete(arr[left]);
      }
      left++;
    }

    if (fruitsMap.size <= 2) {
      maxLength = Math.max(maxLength, right - left + 1);
    }

    right++;
  }

  return maxLength;
}

console.log('Res from maxFruits_v1: ', maxFruits_v1(arr));

function maxFruits_v2(arr, k) {
  let l = 0,
    r = 0,
    maxLength = 0;
  let fruitsMap = new Map();
  while (r < arr.length) {
    if (fruitsMap.has(arr[r])) {
      fruitsMap.set(arr[r], fruitsMap.get(arr[r]) + 1);
    } else {
      fruitsMap.set(arr[r], 1);
    }

    if (fruitsMap.size > k) {
      fruitsMap.set(arr[l], fruitsMap.get(arr[l]) - 1);
      if (fruitsMap.get(arr[l]) === 0) {
        fruitsMap.delete(arr[l]);
      }
      l++;
    }

    if (fruitsMap.size <= k) {
      maxLength = Math.max(maxLength, r - l + 1);
    }

    r++;
  }
  return maxLength;
}

console.log('Optimised O(n) solution:', maxFruits_v2(arr, k));
