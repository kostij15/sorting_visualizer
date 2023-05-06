import { useState, useCallback, useEffect } from "react";
import Navbar from "./components/Navbar";

const SORTING_ALGORITHMS = [
  "merge sort",
  "quick sort, bogo sort",
  "selection sort",
];

function App() {
  const [count, setCount] = useState(0);
  const [algorithmSelected, setAlgorithmSelected] = useState("");
  const [randomNumberArray, setRandomNumberArray] = useState([]);

  const runAlgorithmSelected = useCallback((algorithm: string) => {
    if (!SORTING_ALGORITHMS.includes(algorithm.toLowerCase())) return;
    //set algorithm to be the one selected
    setAlgorithmSelected(algorithm);
  }, []);

  return (
    <main>
      <h1>{algorithmSelected}</h1>
      <Navbar runAlgorithmSelected={runAlgorithmSelected} />
    </main>
  );
}

export default App;
