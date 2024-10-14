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
      result.push([...arr]); //NOTE: Refer the doc below
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

/*DOCS: The reason we use [...arr] instead of just arr is to avoid reference issues. Let's elaborate:

If we used result.push(arr) without the spread operator, we would be pushing a reference to the same arr array that we're modifying throughout the recursion.
This would mean that all elements in result would actually be references to the same array, which would end up empty at the end of the recursion.
By using [...arr], we create a new array with the current contents of arr. This new array is independent of the original arr.
This ensures that each subset we add to result is a snapshot of arr at that particular point in the recursion, preserving the correct subsets.

*/
