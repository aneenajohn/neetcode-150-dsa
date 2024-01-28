//? QUESTION:
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

//* SOLUTION:

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Naive approach Time Complexity => O(n^2) Space Complexity => O(n) as we use answer array => size of ans array ∝ size of the input array.
var productExceptSelf = function (nums) {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1,
      productLeft = 1,
      productRight = 1;

    for (let j = 0; j < i; j++) {
      productLeft *= nums[j];
    }

    for (let k = i + 1; k < nums.length; k++) {
      productRight *= nums[k];
    }

    product = productLeft * productRight;
    answer.push(product);
  }
  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// Optimised Approach TC = O(n); SC = O(n)
const productExceptSelf_v1 = (nums) => {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] *= prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  console.log('answer:', answer);
  return answer;
};

console.log(productExceptSelf_v1([1, 2, 3, 4]));
console.log(productExceptSelf_v1([-1, 1, 0, -3, 3]));
