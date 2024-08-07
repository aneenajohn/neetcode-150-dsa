//? QUESTION
// Find the maximum length of subarray which gives the sum <= k

const arr = [2, 5, 1, 7, 10];
const k = 14;

let maxSum = 0,
  maxLength = 0;

// Brute force:
// Meth: Generate sum of all sub arrays and find their sum
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (j = i; j < arr.length; j++) {
    sum += arr[j];
    console.log(arr[i], arr[j], sum);

    if (sum <= k) {
      let currentLength = j - i + 1;
      if (currentLength > maxLength) {
        maxSum = sum;
        console.log('length: ', i, j, j - i + 1);
        maxLength = currentLength;
      }
    }
  }
}

console.log('Max length of subarray: ', maxLength);
