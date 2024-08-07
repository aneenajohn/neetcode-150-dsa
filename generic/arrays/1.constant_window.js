//? QUESTION
// Given an array with positive and negative intgers and given an integer k,
// what is the maximum sum that you can obtain by picking up k consecutive elements.

const arr = [-1, 2, 3, 3, 4, 5, -1];
const k = 4;

function maximumSum(arr, k) {
  let maxSum = 0;
  let sum = 0;
  let left = 0,
    right = k - 1;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  maxSum = sum;

  while (right < arr.length - 1) {
    right++;
    sum = sum - arr[left] + arr[right];
    left++;
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

console.log(maximumSum(arr, k));
