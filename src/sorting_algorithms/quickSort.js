function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let lessThanPivot = [];
  let greaterThanPivot = [];

  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    if (value <= pivot) {
      lessThanPivot.push(value);
    } else {
      greaterThanPivot.push(value);
    }
  }
  console.log(lessThanPivot, pivot, greaterThanPivot);
  return quickSort(lessThanPivot).concat([pivot], quickSort(greaterThanPivot));
}

let numbers = [4, 6, 3, 2, 9, 7, 3, 5];
let sortedNumbers = quickSort(numbers);
console.log(sortedNumbers);
