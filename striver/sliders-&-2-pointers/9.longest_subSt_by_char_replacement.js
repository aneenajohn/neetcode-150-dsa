const s = 'AABABBA';
const k = 3; //info: Atmost k chars can be replaced to get the max substr

// BF =>
// NOTE: Here the formula is => No. of changes reqd => (length - maxFreq <= k)
function longestSubStrByReplacingKChars(str, k) {
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    const strMap = new Map();
    let maxFreq = 0;
    for (let j = i; j < str.length; j++) {
      strMap.set(str[j], (strMap.get(str[j]) || 0) + 1);
      maxFreq = Math.max(maxFreq, strMap.get(str[j]));
      let currentLength = j - i + 1;
      let changesNeeded = currentLength - maxFreq;

      if (changesNeeded <= k) {
        maxLength = Math.max(maxLength, j - i + 1);
      } else {
        break;
      }
    }
  }

  return maxLength;
}

console.log('Res:', longestSubStrByReplacingKChars(s, k));

// better:

function longestSubStrByReplacingKChars_v1(s, k) {
  const strMap = new Map();
  let left = 0,
    right = 0,
    maxLength = 0,
    maxFreq = 0;

  const n = s.length;
  while (right < n) {
    strMap.set(s[right], (strMap.get(s[right]) || 0) + 1);

    maxFreq = Math.max(maxFreq, strMap.get(s[right]));
    let currentLength = right - left + 1;
    console.log('before:', strMap);
    if (currentLength - maxFreq > k) {
      strMap.set(s[left], strMap.get(s[left]) - 1);
      console.log('After:', strMap);
      left++;
    } else {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }

  return maxLength;
}

console.log(longestSubStrByReplacingKChars_v1(s, k));
