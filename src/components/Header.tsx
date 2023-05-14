import React from "react";
import ModalButton from "./ModalButton";

type Props = {
  algorithmSelected: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function Header({
  algorithmSelected,
  isOpen,
  setIsOpen,
}: Props) {
  return (
    <div className="flex flex-row justify-center items-center py-2">
      <h1 className="py-5 font-bold text-xl">
        {algorithmSelected ? algorithmSelected : "Select Sorting Algorithm"}
      </h1>
      <ModalButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
