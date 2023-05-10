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
            className="flex-1"
            style={{
              backgroundColor: "#482",
              height: `${num / 7}%`,
              overflow: "auto",
            }}
          ></div>
        );
      })}
    </main>
  );
}
