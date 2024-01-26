//? QUESTION:
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

//* SOLUTION:

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Time Complexity => O(n log n)
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      let value = map.get(num) + 1;
      map.set(num, value);
    } else {
      map.set(num, 1);
    }
  }

  const freqArr = Array.from(map); // [...map.entries()]
  //console.log('entries:', [...map.entries()], "freqArr: ", freqArr);
  const sortedFreqArr = freqArr.sort((a, b) => b[1] - a[1]);

  //   console.log(
  //     'res: ',
  //     sortedFreqArr.slice(0, k).map((el) => el[0])
  //   );

  return sortedFreqArr.slice(0, k).map((el) => el[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// TODO: time complexity must be better than O(n log n),
// DOCS: We can use bucket sort to solve it in O(n)
