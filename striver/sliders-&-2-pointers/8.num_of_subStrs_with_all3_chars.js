// ?Question
// Find the number of substrs with all 3 chars
const s = 'bbacba';
function countOfSubStrWithAll3Chars(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // let subStr = '';
    for (let j = i; j < str.length; j++) {
      //   subStr += str[j];
      subStr = str.slice(i, j + 1);
      console.log('Sub str', subStr);
      if (
        subStr.includes('a') &&
        subStr.includes('b') &&
        subStr.includes('c')
      ) {
        count++;
      }
    }
  }
  return count;
}

// console.log(countOfSubStrWithAll3Chars(s));

function countOfSubStrWithAll3Chars_v2(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // let subStr = '';
    for (let j = i; j < str.length; j++) {
      //   subStr += str[j];
      subStr = str.slice(i, j + 1);
      console.log('Sub str', subStr);
      if (
        subStr.includes('a') &&
        subStr.includes('b') &&
        subStr.includes('c')
      ) {
        count += str.length - j;
        break;
      }
    }
  }
  return count;
}

// console.log(countOfSubStrWithAll3Chars_v2(s));

// DOCS: With every char thr is a subStr that ends:

function countOfSubStrWithAll3Chars_v3(str) {
  const strMap = new Map();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    strMap.set(str[i], i);
    if (strMap.size === 3) {
      let endIndex = Math.max(
        strMap.get('a'),
        strMap.get('b'),
        strMap.get('c')
      );
      let startIndex = Math.min(
        strMap.get('a'),
        strMap.get('b'),
        strMap.get('c')
      );

      count += startIndex + 1;
    }
  }

  return count;
}

console.log(countOfSubStrWithAll3Chars_v3(s));
