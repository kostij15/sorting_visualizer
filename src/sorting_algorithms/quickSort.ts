import { swapElements } from "../utils/swapElements";

export function quickSort(
  arr: number[],
  animateArr: number[][],
  start: number,
  end: number
) {
  if (start >= end) return;

  const partitionIdx: number = partition(arr, animateArr, start, end);
  quickSort(arr, animateArr, start, partitionIdx - 1);
  quickSort(arr, animateArr, partitionIdx + 1, end);
}

function partition(
  arr: number[],
  animateArr: number[][],
  low: number,
  high: number
) {
  const pivot = arr[low];
  let start = low + 1;
  let end = high;

  while (start <= end) {
    while (arr[end] > pivot) {
      end--;
    }

    while (arr[start] < pivot) {
      start++;
    }

    if (start <= end) {
      animateArr.push([arr[start], start, arr[end], end]);
      swapElements(arr, start, end);
      start++;
      end--;
    }
  }
  animateArr.push([arr[low], low, arr[end], end]);
  swapElements(arr, low, end);
  return end;
}

export function animateQuickSort(
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
