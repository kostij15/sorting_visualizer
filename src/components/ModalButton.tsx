import React from "react";

type ModalButtonProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

function ModalButton({ isOpen, setIsOpen }: ModalButtonProps) {
  return (
    <div>
      {isOpen ? "" : <button onClick={() => setIsOpen(!isOpen)}>🔎</button>}
    </div>
  );
}

export default ModalButton;
