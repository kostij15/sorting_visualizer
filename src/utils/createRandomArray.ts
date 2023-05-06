function createRandomArray(valuesInput: number): number[] {
  const newNumbersArray: number[] = [];

  for (let i = 1; i <= valuesInput; i++) {
    const newNumber: number = Math.round(Math.random() * valuesInput);
    newNumbersArray.push(newNumber);
  }

  return newNumbersArray;
}
