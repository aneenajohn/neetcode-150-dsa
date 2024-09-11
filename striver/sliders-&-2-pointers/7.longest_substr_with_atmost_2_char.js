// ?QUESTION:
// Find the longest substr with at most k characters

const str = 'aaabbccd';
const k = 2;

function longestSubStrWithKDistinct(arr, k) {
  let left = 0,
    right = 0,
    maxLen = 0;
  const strMap = new Map();

  while (right < arr.length) {
    strMap.set(arr[right], (strMap.get(arr[right]) || 0) + 1);

    while (strMap.size > k) {
      let strFreq = strMap.get(arr[left]) - 1;
      if (strFreq) {
        strMap.set(arr[left], strFreq);
      } else {
        strMap.delete(arr[left]);
      }
      left++;
    }

    if (strMap.size <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
  }

  return maxLen;
}

console.log('Res1: ', longestSubStrWithKDistinct(str, k));

function longestSubStrWithKDistinct(arr, k) {
  let left = 0,
    right = 0,
    maxLen = 0;
  const strMap = new Map();

  while (right < arr.length) {
    strMap.set(arr[right], (strMap.get(arr[right]) || 0) + 1);

    if (strMap.size > k) {
      strMap.set(arr[left], strMap.get(arr[left]) - 1);
      if (strMap.get(arr[left] === 0)) strMap.delete(arr[left]);
      left++;
    }

    if (strMap.size <= 2) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
  }

  return maxLen;
}

console.log('Res2: ', longestSubStrWithKDistinct(str, k));
