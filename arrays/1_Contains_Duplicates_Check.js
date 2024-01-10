// QUESTION:
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true 

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// M1 => Not acceptable
var containsDuplicate_1 = function(nums) {
    const duplicateArr = nums.filter((num, index) => nums.indexOf(num) !== index)
    if(duplicateArr?.length) {
        return true
    }else {
        return false
    }
};


console.log(containsDuplicate_1([1,2,3,1]));

// Accepted Answer
var containsDuplicate = function(nums) {
    const numSet = new Set();

    for(let i=0; i< nums.length; i++) {
        if(numSet.has(nums[i])) {
            return true;
        }else {
            numSet.add(nums[i]);
        }
    }
    return false;
};
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,1,1,2,3,3,4,4]))
