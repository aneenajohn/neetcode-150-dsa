// ?Print all subsequences of the given for eg: arr = [3,1,2] =>
// DOCS: 1. Print all subsequences -- A contiguous/non-contiguous sequences which follows the order
// At each index, you have 2 options, whether to take an element or skip(no take)
const arr = [3, 1, 2];
function printAllSubseq(ind, arr, originalArr) {
  if (ind >= originalArr.length) {
    console.log(arr);
    return;
  }
  // Take(Include) the current element in your sub seq
  arr.push(originalArr[ind]);
  printAllSubseq(ind + 1, arr, originalArr);
  // No Take(Exclude) the current element, this element wont be added to your sub seq
  arr.pop();
  printAllSubseq(ind + 1, arr, originalArr);
}

printAllSubseq(0, [], arr);

// DOCS:Time Complexity Analysis:

// For each element in the array, we have 2 choices (include or exclude)
// The array has n elements
// Therefore, for each subsequence, we make n decisions, and each decision has 2 possibilities
// This leads to 2^n possible subsequences _2_ _2_ _2_ => 2^n

// So, the time complexity is O(2^n).

// Space for storing subsequences:

// The arr parameter in the function stores the current subsequence
// The maximum size of this array would be n
// Therefore, O(n) space is used for storing each subsequence

console.log(
  '=========================================================================='
);

// ?Print all subsequences of the given for eg: arr = [1,2,1] where sum = 2

const arr2 = [1, 2, 1];
const sum = 2; // so the output should be [1,1] & [2]

function printSubSeq(ind, arr, originalArr, sum, currentSum) {
  if (ind === originalArr.length) {
    if (currentSum === sum) {
      console.log(arr);
    }
    return;
  }
  arr.push(originalArr[ind]);
  currentSum += originalArr[ind];

  printSubSeq(ind + 1, arr, originalArr, sum, currentSum);

  arr.pop();
  currentSum -= originalArr[ind];

  printSubSeq(ind + 1, arr, originalArr, sum, currentSum);
}

printSubSeq(0, [], arr2, sum, 0);

console.log(
  '=========================================================================='
);
