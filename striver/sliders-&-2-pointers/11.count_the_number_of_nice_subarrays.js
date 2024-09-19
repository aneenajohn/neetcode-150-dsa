//?QUESTION: Count Number of Nice Subarrays
// DESC:
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.Return the number of nice sub-arrays.

const arr = [1, 1, 2, 1, 1];
const k = 3;

function niceArrayCount(arr, k) {
  let left = 0,
    right = 0,
    sum = 0,
    countOfSubArrays = 0;

  if (k < 0) return 0;
  while (right < arr.length) {
    if (arr[right] % 2 === 1) {
      sum++;
    }
    while (sum > k) {
      sum = sum - (arr[left] % 2);
      left++;
    }

    if (sum <= k) {
      const length = right - left + 1;
      countOfSubArrays += length;
    }

    console.log('The sum:', sum);

    right++;
  }

  return countOfSubArrays;
}

console.log('Count: ', niceArrayCount(arr, k));

console.log('Count2: ', niceArrayCount(arr, k - 1));

const res = niceArrayCount(arr, k) - niceArrayCount(arr, k - 1);

console.log('The num of nice subArrays: ,', res);
