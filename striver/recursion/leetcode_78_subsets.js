// ?Question:

// Given an integer array nums of unique elements, return all possible
// subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  console.log(nums);
  const result = [];
  function recursiveSubs(ind, arr) {
    if (ind >= nums.length) {
      console.log(arr);
      result.push([...arr]);
      return;
    }
    arr.push(nums[ind]);
    recursiveSubs(ind + 1, arr);
    arr.pop();
    recursiveSubs(ind + 1, arr);
  }
  recursiveSubs(0, []);
  return result;
};

subsets([1, 2, 3]);
subsets([0]);
