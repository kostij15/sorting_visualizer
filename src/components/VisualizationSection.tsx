type Props = {
  numbersArray: number[];
};

export default function VisualizationSection({ numbersArray }: Props) {
  return (
    <section className="w-full top-0">
      <div className="flex w-full h-full items-center">
        {numbersArray.map((num, index) => {
          return (
            <div
              key={index}
              className={`flex-1 bg-visualization-color-200 border border-visualization-color-400`}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
