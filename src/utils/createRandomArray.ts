export function createRandomArray(valuesInput: number): number[] {
  const MAX_VALUE = 500;
  const newNumbersArray: number[] = [];

  for (let i = 1; i <= valuesInput; i++) {
    const newNumber: number = Math.round(Math.random() * MAX_VALUE);
    newNumbersArray.push(newNumber);
  }

  return newNumbersArray;
}
