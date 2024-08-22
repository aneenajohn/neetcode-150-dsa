//? QUESTION
// Find the maximum length of subarray which gives the sum <= k

const arr = [2, 5, 1, 7, 10];
const k = 14;

// NOTE:: Brut force:
function maxLengthOfSubArr(arr, k) {
  let n = arr.length,
    maxSum = 0;
  let maxLength = 0;
  // Meth: Generate sum of all sub arrays and find their sum
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum <= k) {
        let currLen = j - i + 1;
        if (currLen > maxLength) {
          maxSum = Math.max(sum, maxSum);
          maxLength = currLen;
        }
      } else if (sum > k) break;
    }
  }
  return { maxSum, maxLength };
}

console.log('Max length of subarray: ', maxLengthOfSubArr(arr, k));

// NOTE: Better: Sliding Window + 2 pointer

// const arr = [2, 5, 1, 7, 10];
function maxLengthOfSubArrWithSW(arr, k) {
  let left = 0,
    right = 0,
    sum = 0,
    maxSum = 0,
    maxLength = 0;

  while (right < arr.length) {
    sum += arr[right];

    while (sum > k && left <= right) {
      sum -= arr[left];
      left++;
    }

    if (sum < k) {
      maxSum = Math.max(sum, maxSum);
      maxLength = Math.max(maxLength, right - left + 1);
    }

    right++;
  }

  return { maxSum, maxLength };
}

console.log('Better Max length of subarray: ', maxLengthOfSubArrWithSW(arr, k));
