import { swapElements } from "../utils/swapElements";

export function selectionSort(arr: number[], animateArr: number[][]) {
  const TOTAL_PASSES = arr.length;
  let numPasses = 0;
  console.log(arr);
  while (numPasses < TOTAL_PASSES) {
    const compareIndex = numPasses;
    let minimumIndex = numPasses;

    for (let i = minimumIndex + 1; i < arr.length; i++) {
      const elem = arr[i];

      if (arr[minimumIndex] > elem) {
        minimumIndex = i;
      }
    }
    if (arr[compareIndex] >= arr[minimumIndex]) {
      animateArr.push([
        arr[compareIndex],
        compareIndex,
        arr[minimumIndex],
        minimumIndex,
      ]);
      swapElements(arr, compareIndex, minimumIndex);
    }
    numPasses++;
  }
}
