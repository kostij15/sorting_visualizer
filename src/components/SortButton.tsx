type SortButtonProps = {
  sortName: string;
  runAlgorithmSelected: (algorithmString: string) => void;
};

export default function SortButton({
  runAlgorithmSelected,
  sortName,
}: SortButtonProps) {
  return (
    <>
      <button
        className="border rounded-2xl shadow-lg p-4 text-lg  bg-primary-color-200 text-white hover:bg-primary-color-100  focus:bg-primary-color-100 transition-all active: scale-95"
        value={sortName.toLowerCase()}
        onClick={(e) => {
          e.preventDefault();
          runAlgorithmSelected(e.currentTarget.value);
        }}
      >
        {sortName}
      </button>
    </>
  );
}
