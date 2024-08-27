//? QUESTION
// Given an array which contains the points of N different cards and an integer K. You have to pick K cards either from front or back such that it gives you max points

const pointsArr = [6, 2, 3, 4, 7, 2, 1, 7, 1];
const k = 4;

function maxPoints(arr, k) {
  let sum = 0,
    maxSum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  maxSum = sum;

  let right = arr.length;
  for (let left = k - 1; left >= 0; left--) {
    right--;
    console.log('left: ', left, arr[left], 'right: ', right, arr[right]);
    sum = sum - arr[left] + arr[right];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}

console.log('MaxSum:', maxPoints(pointsArr, k));
