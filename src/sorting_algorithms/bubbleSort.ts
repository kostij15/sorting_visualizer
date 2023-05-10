//Bubble Sort

//Algorithm
//while ever element is not sorted
// for i < arr.length - 1
// COmpares  elements
//  if arr[i] > arr[i + 1]

export function bubbleSort(arr: number[], animateArr: number[][]): void {
  //Number of comparisons needed to be successfully sorted
  const elementComparisonsNeeded = arr.length - 1;
  let numElementsSorted = 0;

  while (numElementsSorted < elementComparisonsNeeded) {
    //reseting count for number of elements
    numElementsSorted = 0;
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] <= arr[index + 1]) {
        numElementsSorted++;
      } else {
        animateArr.push([arr[index], index, arr[index + 1], index + 1]);
        swapElements(arr, index, index + 1);
      }
    }
  }
}

export function animateBubbleSort(
  newArr: number[],
  animationArr: number[][],
  delay: number,
  setArray: (arr: number[]) => void
) {
  animationArr.forEach(([heightOne, indexOne, heightTwo, indexTwo], idx) => {
    const divOne = document.getElementById(`bar-${indexOne}`);
    const divTwo = document.getElementById(`bar-${indexTwo}`);
    if (!divOne || !divTwo) return;
    setTimeout(() => {
      divOne.style.backgroundColor = "#b041f0";
      divTwo.style.backgroundColor = "#b041f0";
      divOne.style.height = `${heightTwo / 6}%`;
      divTwo.style.height = `${heightOne / 6}%`;
      setTimeout(() => {
        divOne.style.backgroundColor = "#482";
        divTwo.style.backgroundColor = "#482";
        if (idx === animationArr.length - 1) {
          setArray(newArr);
          console.log(newArr);
        }
      }, delay * 2);
    }, delay * idx * 2);
  });
}

function swapElements(arr: number[], index1: number, index2: number) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
