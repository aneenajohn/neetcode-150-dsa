// ?Question

const arr = [1, 2, 1, 3, 4];
const k = 3;

// If we do this in a normal 2 pointer approach, we will miss out on the subarrays while moving the left and right pointers.
// And you're not sure when and under what conditions you move.

// DOCS: Wrong approach
function subArrWith2Ptr(nums, k) {
  let left = 0,
    right = 0,
    count = 0;
  const numMap = new Map();

  while (right < nums.length) {
    numMap.set(nums[right], (numMap.get(nums[right]) || 0) + 1);

    while (numMap.size > k) {
      ``;
      numMap.set(nums[left], numMap.get(nums[left]) - 1);
      if (numMap.get(nums[left]) === 0) {
        numMap.delete(nums[left]);
      }
    }

    if (numMap.size === k) {
      console.log('L,R:', left, right);
      count += 1;
    }
    right++;
  }

  return count;
}

// console.log('count:', subArrWith2Ptr(arr, k));

// DOCS: Optimisied O(N)
function subArrWithKDiffIntegers(arr, k) {
  let left = 0,
    right = 0,
    count = 0;
  const numMap = new Map();

  if (k < 0) return 0;
  while (right < arr.length) {
    numMap.set(arr[right], (numMap.get(arr[right]) || 0) + 1);

    while (numMap.size > k) {
      numMap.set(arr[left], numMap.get(arr[left]) - 1);
      if (numMap.get(arr[left]) === 0) {
        numMap.delete(arr[left]);
      }
      //   console.log('map:', numMap);
      left++;
    }
    // console.log(`l:${left}, r:${right}`);
    if (numMap.size <= k) {
      count += right - left + 1;
    }

    right++;
  }

  //   console.log('Outside loop:', count);
  return count;
}

console.log('Sub Arr:', subArrWithKDiffIntegers(arr, k));

console.log('Arr2: ', subArrWithKDiffIntegers(arr, k - 1));

// TC: O(n) * O(n) => O(2n)
function subArrWithDistictIntegers(arr, k) {
  return subArrWithKDiffIntegers(arr, k) - subArrWithKDiffIntegers(arr, k - 1);
}
const result = subArrWithDistictIntegers(arr, k);
console.log('The res:', result);

// const res2 =
//   subArrWithKDiffIntegers([1, 2, 1, 2, 3], 2) -
//   subArrWithKDiffIntegers([1, 2, 1, 2, 3], 1);

const res2 = subArrWithDistictIntegers([1, 2, 1, 2, 3], 2);
console.log('Res2:', res2);
