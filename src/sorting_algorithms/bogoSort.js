function bogoSort(arr) {
  let shuffledArray;
  let iterations = 0;

  while (!isSorted(arr)) {
    shuffledArray = shuffle(arr);
    iterations++;
  }

  console.log(`Number of iterations to get sorted list is ${iterations}`);
  return shuffledArray;
}

function isSorted(values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] > values[i + 1]) return false;
  }
  return true;
}

function shuffle(arr) {
  let remainingElements = arr.length;

  while (remainingElements) {
    remainingElements--;
    let elementToChange = arr[remainingElements];
    let swapIndex = Math.floor(Math.random() * remainingElements);
    arr[remainingElements] = arr[swapIndex];
    arr[swapIndex] = elementToChange;
  }

  return arr;
}

let newArr = [1, 324, 34, 32, 42, 34, 34, 2];

console.log(bogoSort(newArr));
