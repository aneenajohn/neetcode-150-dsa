//? QUESTION
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

//* SOLUTION:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Naive approach
// Time complexity = O(n^2)
const twoSum = function (nums, target) {
  let twoSum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      twoSum = nums[i] + nums[j];
      if (twoSum === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));

console.log('Added v1');

// With hashing, O(n) time complexity;
const twoSum_v1 = (nums, target) => {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];

    if (numsMap.has(compliment)) {
      return [numsMap.get(compliment), i];
    }

    numsMap.set(nums[i], i);
  }
};

console.log(twoSum_v1([2, 7, 11, 15], 9));
console.log(twoSum_v1([3, 3], 6));
console.log(twoSum_v1([3, 2, 4], 6));
console.log(twoSum_v1([2, 7, 11, 15], 9));

console.log('Added v2');

// With hashing, using objects:

const twoSum_v2 = (nums, target) => {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];

    if (Object.hasOwn(numsMap, compliment)) {
      return [numsMap[compliment], i];
    }

    numsMap[nums[i]] = i;
  }
};

console.log(twoSum_v2([2, 7, 11, 15], 9));
console.log(twoSum_v2([3, 3], 6));
console.log(twoSum_v2([3, 2, 4], 6));
console.log(twoSum_v2([2, 7, 11, 15], 9));
