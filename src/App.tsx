import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import { createRandomArray } from "./utils/createRandomArray";
import VisualizationSection from "./components/VisualizationSection";
import { animateMergeSort, mergeSort } from "./sorting_algorithms/mergeSort";

function App() {
  const [algorithmSelected, setAlgorithmSelected] = useState("");
  const [randomNumberArray, setRandomNumberArray] = useState<number[]>([]);

  const runAlgorithmSelected = useCallback(
    (algorithmName: string) => {
      const SORTING_ALGORITHMS = ["merge", "quick", "bogo", "selection"];

      if (!SORTING_ALGORITHMS.includes(algorithmName.toLowerCase())) return;
      //set algorithm to be the one selected
      setAlgorithmSelected(
        algorithmName[0].toUpperCase() + algorithmName.slice(1)
      );
    },
    [algorithmSelected]
  );

  const handleArrayResize = useCallback(
    (arraySizeInput: number) => {
      if (arraySizeInput <= 0) {
        setRandomNumberArray([]);
      }
      const newArray = createRandomArray(arraySizeInput);
      setRandomNumberArray(newArray);
    },
    [randomNumberArray]
  );

  return (
    <>
      <Navbar
        algorithmSelected={algorithmSelected}
        runAlgorithmSelected={runAlgorithmSelected}
        handleArrayResize={handleArrayResize}
        randomNumberArray={randomNumberArray}
        setRandomNumberArray={setRandomNumberArray}
      />
      <VisualizationSection numbersArray={randomNumberArray} />
    </>
  );
}

export default App;
