type ModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onClose: () => void;
};

function Modal({ isOpen, setIsOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  return (
    <aside className="absolute flex justify-center text-center px-20  py-2 after:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-0 bottom-0 w-[50%] max-w-3/4 h-[50%] border-solid border-black bg-gray-300  overflow-y-scroll z-10000">
      <button
        className="absolute top-5 right-8 w-11 h-11 cursor-pointer opacity-30 text-6xl"
        onClick={onClose}
      >
        &times;
      </button>
      <div>
        <header>
          <h1 className="pt-5 text-[40px] font-semibold">
            Welcome to The Sorting Visualizer!
          </h1>
        </header>
        <div className="flex flex-col items-center">
          <h2 className="pt-5 text-[30px]">
            Here is a quick summary of the app
          </h2>
          <ol className="py-7 text-md text-left indent-10">
            <li>Select the size of the array you want to sort</li>
            <li>Select the speed at which you want to sort the array</li>
            <li>Choose your sorting algorithm</li>
            <li>Repeat!</li>
          </ol>
        </div>
        <section className="flex flex-col  ">
          <h3>
            <span className="text-visualization-color-400 underline font-bold">
              Brown
            </span>{" "}
            represents non-sorted elements
          </h3>

          <h3 className="h-8 border-black p-0 m-0">
            <p>
              <span className="text-sorted-bar-color-color font-bold">
                Green
              </span>{" "}
              Represents sorted elements
            </p>
          </h3>
        </section>
      </div>
    </aside>
  );
}

export default Modal;
