// ?Question: Return the count of all binary subarrays with sum matching the goal

const bin_array = [1, 0, 0, 1, 1, 0];
const goal = 2;

// NOTE: Must know why this is a wrong approach
function countOfSubArrays(arr, goal) {
  let left = 0,
    right = 0,
    sum = 0,
    countOfSubArrays = 0;
  //DOCS: This is wrong approach to move left for this scenario because if left second zero and right is on 5th element=> [1 0 0 1 1 0] => so the subArr is [0 0 1 1] => and right keeps growing as in [0 0 1 1 0] and the first subArray found is [1 0 0 1] so we get the total as just 3
  // But we will the internal subarrays with this as in [0 0 1 1] has 2 more internal subArrays => [0 1 1] and [1 1]
  //  And in this sub array as well => [0 0 1 1 0] from (1 0 0 1 1 0) => (0 1 1 0) => is also a valid one
  //   so count of sub arrays are 3 + 2 +1 => 6

  while (right < arr.length) {
    sum += arr[right];

    while (sum > goal && left < right) {
      sum = sum - arr[left];
      left++;
    }
    if (sum === goal) countOfSubArrays++;
    right++;
  }

  return countOfSubArrays;
}

console.log(countOfSubArrays(bin_array, goal));

// DOCS: Right Solution:
// Find all subarrays where the sum is <= goal
// Count of subarrays where sum is goal = f(arr, goal) - f(arr,goal -1)

function countOfSubArrays_v1(arr, goal) {
  let left = 0,
    right = 0,
    sum = 0,
    countOfSubArrays = 0;

  if (goal < 0) return 0; // edge case to handle when the function is called f(arr, goal -1) and so if goal becomes less than zero;
  while (right < arr.length) {
    sum += arr[right];

    while (sum > goal) {
      sum -= arr[left];
      left++;
    }

    if (sum <= goal) {
      const length = right - left + 1;
      countOfSubArrays += length;
    }

    right++;
  }

  return countOfSubArrays;
}

console.log('1:', countOfSubArrays_v1(bin_array, goal)); // count of all subarrays where the sum <= 2
console.log('2:', countOfSubArrays_v1(bin_array, goal - 1)); // count of all subarrays where the sum <= 1

// count of all subarrays where the sum === 2 = // count of all subarrays where the sum <= 2 - count of all subarrays where the sum <= 1
const result =
  countOfSubArrays_v1(bin_array, goal) -
  countOfSubArrays_v1(bin_array, goal - 1);

console.log('Res:', result);
