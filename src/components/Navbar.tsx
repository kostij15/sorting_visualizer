import React from "react";

// type Props = {};

export default function Navbar() {
  return (
    <nav className="w-screen bg-gray-400 py-4">
      <div className="flex items-center justify-center w-full gap-5">
        <button className="border rounded-md shadow-lg py-1 px-4 bg-primary-color-200 text-white hover:bg-primary-color-100  focus:bg-primary-color-100 transition-all active: scale-95">
          Merge Sort
        </button>
        <button className="border rounded-md shadow-lg py-1 px-4 bg-primary-color-200 text-white hover:bg-primary-color-100  focus:bg-primary-color-100 transition-all active: scale-95">
          Bubble Sort
        </button>
        <button className="border rounded-md shadow-lg py-1 px-4 bg-primary-color-200 text-white hover:bg-primary-color-100  focus:bg-primary-color-100 transition-all active: scale-95">
          Insertion Sort
        </button>
        <button className="border rounded-md shadow-lg py-1 px-4 bg-primary-color-200 text-white hover:bg-primary-color-100  focus:bg-primary-color-100 transition-all active: scale-95">
          Bogo Sort
        </button>
        <button className=" border rounded-md py-1 px-4 underline  text-slate-200 bg-sort-button-color-100">
          Sort!
        </button>
      </div>
    </nav>
  );
}
