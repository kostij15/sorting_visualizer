export function mergeSort(
  items: number[],
  auxillaryArr: number[],
  animationArr: number[][],
  lowNum: number,
  highNum: number
) {
  if (lowNum >= highNum) return;

  const midpoint = Math.floor((lowNum + highNum) / 2);

  mergeSort(items, auxillaryArr, animationArr, lowNum, midpoint);
  mergeSort(items, auxillaryArr, animationArr, midpoint + 1, highNum);
  merge(items, auxillaryArr, animationArr, lowNum, midpoint, highNum);
}

export function animateMergeSort(
  newArr: number[],
  animationArr: number[][],
  delay: number,
  setArray: (arr: number[]) => void
) {
  animationArr.forEach(([newHeight, index], idx) => {
    const div = document.getElementById(`bar-${index}`);
    if (!div) return;
    setTimeout(() => {
      div.style.backgroundColor = "#b041f0";
      div.style.height = `${newHeight / 6}%`;
      setTimeout(() => {
        div.style.backgroundColor = "#482";
        if (idx === animationArr.length - 1) {
          setArray(newArr);
        }
      }, delay * 2);
    }, delay * idx * 2);
  });
}

function merge(
  items: number[],
  auxillaryArr: number[],
  animationArr: number[][],
  lowNum: number,
  midpoint: number,
  highNum: number
) {
  for (let j = lowNum; j <= highNum; j++) {
    auxillaryArr[j] = items[j];
  }

  let lowIndex = lowNum;
  let upperIndex = midpoint + 1;

  let i = lowNum;
  while (i <= highNum) {
    if (lowIndex > midpoint) {
      //if the "lower" index we are looking at is greater than the midpoint
      animationArr.push([auxillaryArr[upperIndex], i]);
      items[i] = auxillaryArr[upperIndex++];
    } else if (upperIndex > highNum) {
      animationArr.push([auxillaryArr[lowIndex], i]);
      items[i] = auxillaryArr[lowIndex++];
    } else if (auxillaryArr[lowIndex] <= auxillaryArr[upperIndex]) {
      animationArr.push([auxillaryArr[lowIndex], i]);
      items[i] = auxillaryArr[lowIndex++];
    } else {
      animationArr.push([auxillaryArr[upperIndex], i]);
      items[i] = auxillaryArr[upperIndex++];
    }
    i++;
  }
}
