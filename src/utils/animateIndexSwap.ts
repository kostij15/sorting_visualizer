export function animateIndexSwap(
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
