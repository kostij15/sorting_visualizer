import React, { useEffect, useState } from "react";
import SortButton from "./SortButton";

enum Algorithm {
  mergeSort,
  bubbleSort,
  insertionSort,
  bogoSort,
}

type NavbarProps = {
  runAlgorithmSelected: (algorithmString: string) => void;
  handleArrayResize: (arraySizeInput: number) => void;
};

interface Settings {
  algorithmSelected: Algorithm;
  arrayLength: number;
  delay: number;
}

const intialSettings: Settings = {
  algorithmSelected: Algorithm.mergeSort,
  arrayLength: 25,
  delay: 15,
};

export default function Navbar({
  runAlgorithmSelected,
  handleArrayResize,
}: NavbarProps) {
  const [settings, setSettings] = useState<Settings>(intialSettings);

  useEffect(() => {
    handleArrayResize(settings.arrayLength);
    console.log(`New length: ${settings.arrayLength}`);
  }, [settings.arrayLength]);

  return (
    <nav className="w-screen bg-gray-400 py-10 bottom-0 z-[95] fixed">
      <div className="flex items-center justify-center w-full gap-5">
        <SortButton
          runAlgorithmSelected={runAlgorithmSelected}
          sortName="Merge"
        />
        <SortButton
          runAlgorithmSelected={runAlgorithmSelected}
          sortName="Quick"
        />
        <SortButton
          runAlgorithmSelected={runAlgorithmSelected}
          sortName="Selection"
        />
        <SortButton
          runAlgorithmSelected={runAlgorithmSelected}
          sortName="Bogo"
        />
      </div>
      <div className="flex flex-col items-center py-4">
        <label htmlFor="array-size" className="py-2">
          Array Size: {settings.arrayLength}
        </label>
        <input
          className="py-2 w-1/4"
          type="range"
          id="array-size"
          name="array-size"
          min={1}
          max={10000}
          defaultValue={settings.arrayLength}
          onClick={(e) => {
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
          max={10000}
          defaultValue={settings.delay}
          onClick={(e) => {
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
