import { animateMergeSort, mergeSort } from "../sorting_algorithms/mergeSort";
import { animateIndexSwap } from "../utils/animateIndexSwap";
import { bubbleSort } from "../sorting_algorithms/bubbleSort";
import { quickSort } from "../sorting_algorithms/quickSort";
import { selectionSort } from "../sorting_algorithms/selectionSort";

type SortButtonProps = {
  sortName: string;
  sortingArray: number[];
  runAlgorithmSelected: (algorithmString: string) => void;
  setRandomNumberArray: (arr: number[]) => void;
  settings: Settings;
};

export default function SortButton({
  runAlgorithmSelected,
  setRandomNumberArray,
  sortingArray,
  settings,
  sortName,
}: SortButtonProps) {
  function runSortAlgorithm(algorithmName: string) {
    const auxArr: number[] = [];
    const animateArr: number[][] = [];
    const copiedNumberArray = [...sortingArray];
    const startIndex = 0;
    const endIndex = copiedNumberArray.length - 1;

    switch (algorithmName) {
      case "merge":
        mergeSort(copiedNumberArray, auxArr, animateArr, startIndex, endIndex);
        animateMergeSort(
          copiedNumberArray,
          animateArr,
          settings.delay,
          setRandomNumberArray
        );
        break;
      case "quick":
        quickSort(copiedNumberArray, animateArr, startIndex, endIndex);
        animateIndexSwap(
          copiedNumberArray,
          animateArr,
          settings.delay,
          setRandomNumberArray
        );
        break;
      case "bubble":
        bubbleSort(copiedNumberArray, animateArr);
        animateIndexSwap(
          copiedNumberArray,
          animateArr,
          settings.delay,
          setRandomNumberArray
        );
        break;
      case "selection":
        selectionSort(copiedNumberArray, animateArr);
        animateIndexSwap(
          copiedNumberArray,
          animateArr,
          settings.delay,
          setRandomNumberArray
        );
    }
    document.title = `${
      algorithmName[0].toUpperCase() + algorithmName.slice(1)
    } - Array Size ${copiedNumberArray.length}`;
  }
  return (
    <>
      <button
        className="border rounded-2xl shadow-lg p-4 text-lg  bg-primary-color-200 text-white hover:bg-primary-color-100  focus:bg-primary-color-100 transition-all active: scale-95"
        value={sortName.toLowerCase()}
        onClick={(e) => {
          runAlgorithmSelected(e.currentTarget.value);
          runSortAlgorithm(e.currentTarget.value);
        }}
      >
        {sortName}
      </button>
    </>
  );
}
