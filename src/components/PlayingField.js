import Square from "./Square";

function PlayingField() {
  return (
    <div className="extra-sm:w-72 extra-sm:h-72 sm:h-96 sm:w-96 bg-gray-300 grid grid-cols-4 gap-1 border border-double p-1">
      <Square value={1} />
      <Square value={2} />
      <Square value={3} />
      <Square value={4} />
      <Square value={5} />
      <Square value={6} />
      <Square value={7} />
      <Square value={8} />
      <Square value={9} />
      <Square value={10} />
      <Square value={11} />
      <Square value={12} />
      <Square value={13} />
      <Square value={14} />
      <Square value={15} />
      <Square />
    </div>
  );
}

export default PlayingField;
