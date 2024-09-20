// ?Question

const arr = [1, 2, 1, 3, 4];
const k = 3;
function subArrWithKDiffIntegers(arr, k) {
  let left = 0,
    right = 0,
    count = 0;
  const numMap = new Map();

  while (right < arr.length) {
    numMap.set(arr[right], (numMap.get(arr[right]) || 0) + 1);

    while (numMap.size > k) {
      numMap.set(arr[left], numMap.get(arr[left]) - 1);
      if (numMap.get(arr[left]) === 0) {
        numMap.delete(arr[left]);
      }
      console.log('map:', numMap);
      left++;
    }
    console.log(`l:${left}, r:${right}`);
    if (numMap.size <= k) {
      count += right - left + 1;
    }

    right++;
  }

  console.log('Outside loop:', count);
  return count;
}

console.log('Sub Arr:', subArrWithKDiffIntegers(arr, k));

console.log('Arr2: ', subArrWithKDiffIntegers(arr, k - 1));

const result =
  subArrWithKDiffIntegers(arr, k) - subArrWithKDiffIntegers(arr, k - 1);

console.log('The res:', result);
