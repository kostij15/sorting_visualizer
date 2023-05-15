import React from "react";

type ModalButtonProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

//Button will be a way to access the help section after we close the initial modal popup
function ModalButton({ isOpen, setIsOpen }: ModalButtonProps) {
  return (
    <div>
      {isOpen ? "" : <button onClick={() => setIsOpen(!isOpen)}>🔎</button>}
    </div>
  );
}

export default ModalButton;
