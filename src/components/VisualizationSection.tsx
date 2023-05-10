type Props = {
  numbersArray: number[];
};

export default function VisualizationSection({ numbersArray }: Props) {
  return (
    <main className="flex w-full h-[70%] items-end">
      {numbersArray.map((num, index) => {
        return (
          <div
            key={index}
            id={`bar-${index}`}
            className="flex-1 bg-visualization-color-400 border-2 border-black"
            style={{
              height: `${num / 6}%`,
            }}
          ></div>
        );
      })}
    </main>
  );
}
