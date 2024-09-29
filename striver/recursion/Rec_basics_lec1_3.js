// ?O: Print name 5 times

const name = 'aneena';
function printNameNTimes(i, n) {
  if (i > n) return;
  console.log('Aneena');
  printNameNTimes(i + 1, n);
}

// printNameNTimes(1, 3);

// ?Print linearly from 1 to N
const num1 = 15;

function printFrom1ToN(i, num) {
  if (i > num) return;
  console.log(i);
  printFrom1ToN(i + 1, num);
}

// printFrom1ToN(1, num1);

// ?Print linearly from N to 1;

const num2 = 1;
function printFromNto1(i, num) {
  if (i < num) return;
  console.log(i);
  printFromNto1(i - 1, num);
}

// printFromNto1(15, num2);

// ?Print linearly from 1 to N using backTracking

// DOCS: In backtracking, You can start from the result and do the task after the function call
// In forwardTracking, you start from the beginning and do the task and then call the func with the next set of params

function printWithBackTrack(i, n) {
  if (i < 1) return;
  printWithBackTrack(i - 1, n);
  console.log(i);
}

printWithBackTrack(5, 5);

// ?Print linearly from 1 to N using backTracking

function printInDecOrderWithBT(i, n) {
  if (i > n) return;
  printInDecOrderWithBT(i + 1, n);
  console.log(i);
}

printInDecOrderWithBT(1, 5);

/*
Here is a bunch of repetitions below
*/

function printNto1(num) {
  if (num === 0) return;
  console.log(num);
  printNto1(num - 1);
}

printNto1(5);

function print1toN(num, n) {
  if (num > n) return;
  console.log(num);
  print1toN(num + 1, n);
}

print1toN(1, 5);

function print1toN_BackTrack(num, n) {
  if (num === 0) return;
  print1toN_BackTrack(num - 1, n);
  console.log(num);
}

print1toN_BackTrack(5, 5);

function printNto1_BackTrack(num, n) {
  if (num > n) return;
  printNto1_BackTrack(num + 1, n);
  console.log(num);
}

printNto1_BackTrack(1, 5);

/*
Repeated code ends up here
*/

// ? sum of first N numbers: Parameterized Approach
// let sum = 0;
function sumOfN(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  sumOfN(i - 1, sum + i);
}

const N = 5; 
const initialSum = 0;
console.log('The sum of first N:', sumOfN(N, initialSum));
// In parameterized you can return the sum

function sumOfNWithRet(num, sum) {
  if (num < 1) {
    return sum;
  }
  return sumOfNWithRet(num - 1, sum + num);
}

const res = sumOfNWithRet(3, 0);
console.log({ res });

// ? sum of first N numbers: Functional approach
// DOCS: N =3 => 3+f(2) => res +f(1) => res+f(0) (At zero terminate)

function sumOfNFunc(n) {
  if (n === 0) return 0;
  return n + sumOfNFunc(n - 1);
}

console.log('sumOfNFunc functional:', sumOfNFunc(5));

function factorialOfN(n) {
  if (n === 1) return 1;
  return n * factorialOfN(n - 1);
}

console.log(factorialOfN(5));

function factorialOfNParam(i, factorialRes) {
  if (i === 1) {
    console.log({ factorialRes });
    return;
  }

  factorialOfNParam(i - 1, factorialRes * i);
}

console.log(factorialOfNParam(5, 1));
