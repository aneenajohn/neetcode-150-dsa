//? QUESTION
// In an array of 1s and 0s, Find the max consecutive length of 1s, by flipping k number of 0s

const arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

function maxConsecutive1s(arr, k) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let subArr = [];
    let zeroes = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === 0) zeroes++;
      if (zeroes > k) break;
      maxLength = Math.max(maxLength, j - i + 1);
      subArr = [...subArr, arr[j]];
      //   console.log(subArr, maxLength);
    }
  }
  return maxLength;
}

// console.log(
//   'The maxLength of consecutive 1s by flipping k 0s:',
//   maxConsecutive1s(arr, k)
// );

function maxConsecutive1s_v1(arr, k) {
  //TC: O(n) + O(n) = O(2n)
  let left = 0,
    right = 0,
    zeroes = 0,
    maxLength = 0;
  while (right < arr.length) {
    //-- TC- O(n)
    if (arr[right] === 0) zeroes++;
    while (zeroes > k) {
      //-- TC- O(n)
      if (arr[left] === 0) zeroes--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}

// console.log('The max consecutive: ', maxConsecutive1s_v1(arr, k));

function maxConsecutive1s_v2(arr, k) {
  let left = 0,
    right = 0,
    zeroes = 0,
    maxLength = 0;
  while (right < arr.length) {
    if (arr[right] === 0) zeroes++;
    if (zeroes > k) {
      if (arr[left] === 0) zeroes--;
      left++;
      console.log("left:",left,"right:",right,"zeroes: ", zeroes);
    }
    if (zeroes <= k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }
  return maxLength;
}

console.log('Most optimised: ', maxConsecutive1s_v2(arr, k));
