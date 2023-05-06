import { useState, useCallback, useEffect } from "react";
import Navbar from "./components/Navbar";
import { createRandomArray } from "./utils/createRandomArray";
import VisualizationSection from "./components/VisualizationSection";

const SORTING_ALGORITHMS = [
  "merge sort",
  "quick sort, bogo sort",
  "selection sort",
];

function App() {
  const [algorithmSelected, setAlgorithmSelected] = useState("");
  const [randomNumberArray, setRandomNumberArray] = useState<number[]>([]);

  const runAlgorithmSelected = useCallback((algorithm: string) => {
    if (!SORTING_ALGORITHMS.includes(algorithm.toLowerCase())) return;
    //set algorithm to be the one selected
    setAlgorithmSelected(algorithm);
  }, []);

  const handleArrayResize = useCallback((arraySizeInput: number) => {
    if (arraySizeInput <= 0) {
      setRandomNumberArray([]);
    }
    const newArray = createRandomArray(arraySizeInput);
    setRandomNumberArray(newArray);
  }, []);

  return (
    <main>
      <h1>{algorithmSelected}</h1>
      <Navbar
        runAlgorithmSelected={runAlgorithmSelected}
        handleArrayResize={handleArrayResize}
      />
      <VisualizationSection numbersArray={randomNumberArray} />
    </main>
  );
}

export default App;
