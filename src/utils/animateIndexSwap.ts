export function animateIndexSwap(
  newArr: number[],
  animationArr: number[][],
  delay: number,
  setArray: (arr: number[]) => void
) {
  animationArr.forEach(([heightOne, indexOne, heightTwo, indexTwo], idx) => {
    //Grabs the div of the two bars that we're going to switch
    const divOne = document.getElementById(`bar-${indexOne}`);
    const divTwo = document.getElementById(`bar-${indexTwo}`);
    //Returning nothing if either element returns a falsy value (undefined/null)
    if (!divOne || !divTwo) return;

    //We want three processes to happen when switching the order of the bars
    //1. Switch the heights
    //2. Change the background color
    //3. Set the global array to now be the order given here
    //4. Be able to take the delay input and use the value as the speed for sorting
    setTimeout(() => {
      //Keeping the background color to that of the primary color
      divOne.style.backgroundColor = "#b041f0";
      divTwo.style.backgroundColor = "#b041f0";
      divOne.style.height = `${heightTwo / 6}%`;
      divTwo.style.height = `${heightOne / 6}%`;
      setTimeout(() => {
        //Changing the color of the bars to be that of the sorted bar color
        divOne.style.backgroundColor = "#482";
        divTwo.style.backgroundColor = "#482";
        if (idx === animationArr.length - 1) {
          setArray(newArr);
        }
      }, delay * 2);
    }, delay * idx * 2);
  });
}
