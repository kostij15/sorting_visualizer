function selectedSort(arr) {
  console.time("Execution Time");

  let unsortedArray = [...arr];
  let sortedArray = [];
  let minimumIndex;
  let minimumNumber;

  while (unsortedArray.length > 0) {
    minimumIndex = 0;
    minimumNumber = unsortedArray[minimumIndex];

    for (let i = 1; i < unsortedArray.length; i++) {
      let element = unsortedArray[i];
      if (minimumNumber > element) {
        minimumIndex = i;
        minimumNumber = element;
      }
    }

    sortedArray.push(minimumNumber);
    unsortedArray.splice(minimumIndex, 1);
    minimumIndex = null;
    minimumNumber = null;
  }

  console.timeEnd("Execution Time");
  return sortedArray;
}

let newArr = [1, 324, 34, 32, 42, 34, 34, 2];

console.log(selectedSort(newArr));
