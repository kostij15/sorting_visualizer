function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const copiedArray = arr.slice();
  const pivot: number = copiedArray[0];
  const lessThanPivot: number[] = [];
  const greaterThanPivot: number[] = [];

  for (let i = 1; i < copiedArray.length; i++) {
    const value = copiedArray[i];
    if (value <= pivot) {
      lessThanPivot.push(value);
    } else {
      greaterThanPivot.push(value);
    }
  }
  console.log(lessThanPivot, pivot, greaterThanPivot);
  return quickSort(lessThanPivot).concat([pivot], quickSort(greaterThanPivot));
}
