// ? Reverse an array
// ------------------------------------------------------------------------------
// Reverse
// ------------------------------------------------------------------------------
// Meth1: with for loop

const arr = [1, 2, 3, 4, 2];

// console.log(arr.reverse());

// M1
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(i, arr[i]);
  reversed = [...reversed, arr[i]];
}

console.log({ reversed });

// M2
function revByPointers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    console.log('here: ', arr);
    left++;
    right--;
  }

  console.log(arr);
  return arr;
}
console.log(revByPointers(arr));

// M3
function revByRecursion(left, right, arr) {
  if (left >= right) return arr;

  swap(left, right, arr);
  return revByRecursion(left + 1, right - 1, arr);
}

function swap(left, right, arr) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

console.log(revByRecursion(0, arr.length - 1, arr));

// M4
function revWithASinglePointer(numIndex, arr) {
  if (numIndex >= arr.length / 2) return arr;
  // if (numIndex === arr.length - numIndex - 1) return arr; //DOCS: Both these condition works
  swap(numIndex, arr.length - numIndex - 1, arr);
  return revWithASinglePointer(numIndex + 1, arr);
}

console.log(revWithASinglePointer(0, arr));

// ?Check if the string is palindrome
// ------------------------------------------------------------------------------
// Palindrome
// ------------------------------------------------------------------------------

console.log('==============================================================');
function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('aneena'));
console.log(isPalindrome('anee'));

console.log('----------------------------------------------------');

function checkEquality(left, right, str) {
  return str[left] === str[right];
}
function isPalindromeByRecursion(left, right, str) {
  if (left >= right) {
    return true;
  }
  let res = checkEquality(left, right, str);
  if (!res) {
    return false;
  }
  return isPalindromeByRecursion(left + 1, right - 1, str);
}

const str1 = 'aneena';
const str2 = 'anee';
const str3 = 'madam';
console.log(isPalindromeByRecursion(0, str1.length - 1, str1));
console.log(isPalindromeByRecursion(0, str2.length - 1, str2));
console.log(isPalindromeByRecursion(0, str3.length - 1, str3));

console.log('----------------------------------------------------');
