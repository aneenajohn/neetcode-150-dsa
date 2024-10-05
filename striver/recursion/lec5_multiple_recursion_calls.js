// ?Question: Return the nth Fibonacci Number
// DOCS: 0 1 1 2 3 5 8 13 21 34 ... => For f(0th) => 0, f(1st) => 1, f(6th) => 8

function fibonacci(n) {
  let fiboObject = {
    0: 0,
    1: 1,
  };

  for (let i = 2; i <= n; i++) {
    fiboObject[i] = fiboObject[i - 1] + fiboObject[i - 2];
  }

  return fiboObject[n];
}

console.log(fibonacci(5));

// TC is ~(2^n) exponential
function fibonacciRecursion(n) {
  if (n <= 1) {
    return n;
  }
  let lastBefore = fibonacciRecursion(n - 1);
  let last = fibonacciRecursion(n - 2);
  return lastBefore + last;
}

console.log(fibonacciRecursion(5));
