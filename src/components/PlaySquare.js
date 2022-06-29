

function PlaySquare({ value, onSwap }) {
  const handleClassNames = () => {
  if (value) {
      if (value >= 1 && value <= 4) return "elem_first-line";
      else if (value >= 5 && value <= 8) return "elem_second-line";
      else if (value >= 9 && value <= 12) return "elem_third-line";
      else if (value >= 13 && value <= 15) return "elem_foured-line";
    } else return "square-wrap-empty";
  };

  return (
    <div onClick={onSwap} className={`square-wrap ${handleClassNames()}`}>
      <span className={value ? "numerical-square" : "square-empty-content"}>
        {value}
      </span>
    </div>
  );
}

export default PlaySquare;
