// ?Print all subsequences of the given for eg: arr = [3,1,2] =>
// DOCS: 1. Print all subsequences -- A contiguous/non-contiguous sequences which follows the order
// At each index, you have 2 options, whether to take an element or skip(no take)

console.log('Print all sub sequences:');
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
console.log(
  'Print all subsequences of the given array where sum of the elements of arr = sum given'
);

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

// DOCS: Tech to print only 1 answer

/*
f() {
  if(base case is satisfied) => return true
  else return false
  if(f() === true) {
    return true;
  }
  if(f() === true) {
    return true;
  }
  return false;
}
*/

console.log(
  'Print the first sub sequence where sum of all elements is equal to given sum'
);

function printFirstSubSeq(ind, arr, originalArr, sum, currentSum) {
  if (ind === originalArr.length) {
    if (currentSum === sum) {
      console.log(arr);
      return true;
    }
    return false;
  }

  arr.push(originalArr[ind]);
  currentSum += originalArr[ind];
  if (printFirstSubSeq(ind + 1, arr, originalArr, sum, currentSum) === true) {
    return true;
  }

  arr.pop();
  currentSum -= originalArr[ind];
  if (printFirstSubSeq(ind + 1, arr, originalArr, sum, currentSum) === true) {
    return true;
  }

  return false;
}

printFirstSubSeq(0, [], arr2, sum, 0);

/*
Count the number of subsequences where the condition is satisfied

 THIS IS FOR 2 RECURSION CALLS
 f() {
  base case 
    return 1 => condition satisfies
    return 0 => condition not satisfied

    l = f()
    r = f()

   
 }

 IF THR ARE MULTIPLE RECURSIVE CALLS
 f() {
  base case 
    return 1 => condition satisfies
    return 0 => condition not satisfied

    let s=0;
    f(i => n) {
      s += f();
    }

    return s;

 }
*/

function countTheNumOfSubSeq(ind, arr, originalArr, sum, currentSum) {
  // Optimisation: Strictly when we have arrays of only +ve nums
  if (currentSum > sum) return 0; //Can never satisfy the required condition.

  //Base case check
  if (ind === originalArr.length) {
    if (currentSum === sum) {
      return 1;
    }
    return 0;
  }

  // arr.push(originalArr[ind]); // not needed as we don't the arr
  currentSum += originalArr[ind];
  let l = countTheNumOfSubSeq(ind + 1, arr, originalArr, sum, currentSum);

  // arr.pop(); // not needed as we don't the arr
  currentSum -= originalArr[ind];
  let r = countTheNumOfSubSeq(ind + 1, arr, originalArr, sum, currentSum);

  return l + r;
}

console.log('Res:', countTheNumOfSubSeq(0, [], arr2, 2, 0));
