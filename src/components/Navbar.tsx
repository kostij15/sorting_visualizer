import { useEffect, useState } from "react";
import SortButton from "./SortButton";

enum Algorithm {
  mergeSort,
  bubbleSort,
  insertionSort,
  bogoSort,
}

type NavbarProps = {
  algorithmSelected: string;
  randomNumberArray: number[];
  setRandomNumberArray: (arr: number[]) => void;
  runAlgorithmSelected: (algorithmString: string) => void;
  handleArrayResize: (arraySizeInput: number) => void;
};

const intialSettings: Settings = {
  arrayLength: 25,
  delay: 15,
};

export default function Navbar({
  algorithmSelected,
  runAlgorithmSelected,
  randomNumberArray,
  setRandomNumberArray,
  handleArrayResize,
}: NavbarProps) {
  const [settings, setSettings] = useState<Settings>(intialSettings);

  useEffect(() => {
    handleArrayResize(settings.arrayLength);
  }, [settings.arrayLength]);

  return (
    <nav className="flex flex-col h-[30%] w-screen py-2">
      <div className="py-2">
        <h1 className="flex w-full justify-center py-5 font-bold text-xl">
          {algorithmSelected ? algorithmSelected : "Select Sorting Algorithm"}
        </h1>
      </div>
      <div className="flex items-center justify-center w-full gap-5">
        <SortButton
          runAlgorithmSelected={runAlgorithmSelected}
          sortingArray={randomNumberArray}
          setRandomNumberArray={setRandomNumberArray}
          settings={settings}
          sortName="Merge"
        />
        <SortButton
          runAlgorithmSelected={runAlgorithmSelected}
          sortingArray={randomNumberArray}
          setRandomNumberArray={setRandomNumberArray}
          settings={settings}
          sortName="Quick"
        />
        <SortButton
          runAlgorithmSelected={runAlgorithmSelected}
          sortingArray={randomNumberArray}
          setRandomNumberArray={setRandomNumberArray}
          settings={settings}
          sortName="Selection"
        />
        <SortButton
          runAlgorithmSelected={runAlgorithmSelected}
          sortingArray={randomNumberArray}
          setRandomNumberArray={setRandomNumberArray}
          settings={settings}
          sortName="Bogo"
        />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="array-size" className="py-2">
          Array Size: {settings.arrayLength}
        </label>
        <input
          className="py-2 w-1/4"
          type="range"
          id="array-size"
          name="array-size"
          min={10}
          max={500}
          defaultValue={settings.arrayLength}
          onInput={(e) => {
            e.preventDefault();
            const newSizeSetting: Settings = {
              ...settings,
              arrayLength: Number(e.currentTarget.value),
            };
            setSettings(newSizeSetting);
          }}
        />
        <label htmlFor="array-size">Delay: {settings.delay}</label>
        <input
          className="py-2 w-1/4"
          type="range"
          id="array-size"
          name="array-size"
          min={1}
          max={500}
          defaultValue={settings.delay}
          onInput={(e) => {
            e.preventDefault();

            const newDelaySetting: Settings = {
              ...settings,
              delay: Number(e.currentTarget.value),
            };
            setSettings(newDelaySetting);
          }}
        />
      </div>
    </nav>
  );
}
