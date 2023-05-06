function mergeSort(arr) {
  /*
    Sorts list in ascending order
    returns new list

    3 steps:
      1. Divide: Find the midpoint of the list and divide into sublists
      2. Conquer: Recursively sort the sublists created in previous step
      3. Combine: Merge the sorted sublists created in the previous step

      Merge sort runs in O(n logn)
  */

  if (arr.length <= 1) {
    return arr;
  }

  let [leftSide, rightSide] = split(arr);

  let left = mergeSort(leftSide);
  let right = mergeSort(rightSide);

  return merge(left, right);
}

function split(arr) {
  /**
   * Takes O(log n) time
   */
  const midpoint = Math.round(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return [left, right];
}

function merge(left, right) {
  /**
   * runs in overall O(n) time
   */
  let l = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      l.push(left[i]);
      i++;
    } else {
      l.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    l.push(left[i]);
    i++;
  }

  while (j < right.length) {
    l.push(right[j]);
    j++;
  }

  return l;
}

function verifySorted(arr) {
  if (arr.length === 0 || arr.length === 1) return true;
  return arr[0] < arr[1] && verifySorted(arr.slice(1));
}

let newList = [54, 62, 93, 17, 77, 31, 44, 55, 20];

l = mergeSort(newList);
console.log(l);
console.log(verifySorted(l));
