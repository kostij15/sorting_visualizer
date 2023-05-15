export function createRandomArray(valuesInput: number): number[] {
  //Sets the max Value to 500
  const MAX_VALUE = 500;
  const newNumbersArray: number[] = [];

  for (let i = 1; i <= valuesInput; i++) {
    //Grabs a random number from 0 - 500
    const newNumber: number = Math.round(Math.random() * MAX_VALUE);
    newNumbersArray.push(newNumber);
  }

  return newNumbersArray;
}
