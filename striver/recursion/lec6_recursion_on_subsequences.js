// DOCS: Print all subsequences -- A contiguous/non-contiguous sequences which follows the order
// At each index, you have 2 options, whether to take an element or skip(no take)
const arr = [3, 1, 2];
function printAllSubseq(ind, arr, originalArr) {
  if (ind >= originalArr.length) {
    console.log(arr);
    return;
  }
  // Take(Include) the current element
  arr.push(originalArr[ind]);
  printAllSubseq(ind + 1, arr, originalArr);
  // No Take(Exclude) the current element
  arr.pop();
  printAllSubseq(ind + 1, arr, originalArr);
}

printAllSubseq(0, [], arr);
