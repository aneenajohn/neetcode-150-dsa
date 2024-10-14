const arr = [4, 6, 2, 5, 7, 9, 1, 3];

function findPartitionIndex(arr, low, high) {
  // 1. Place the pivot in the right position in the sorted array

  const pivot = arr[low];
  let i = low,
    j = high;
  while (i <= j) {
    while (arr[i] <= pivot && i <= high) {
      i++;
    }

    while (arr[j] > pivot && j >= low) {
      j--;
    }

    if (i < j) {
      //   console.log(`i, ${i}, j, ${j}`);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //   console.log(arr);
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

findPartitionIndex(arr, 0, arr.length - 1);

/*
qs(arr, low,high) {
    SORT only if more than one elem is available
    if(low<high) {
        partitionIndex = f(arr, low, high);
        qs(arr, low, partitionIndex -1);
        qs(arr, partitionIndex +1, high)
    }
}
*/

function quickSort(arr, low, high) {
  if (low < high) {
    partitionIndex = findPartitionIndex(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

quickSort(arr, 0, arr.length - 1);

console.log('Res:', arr);
