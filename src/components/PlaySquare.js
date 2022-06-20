function PlaySquare({ value, index, onSwap }) {

  const handleClassNames = () => {
    if (value) {
      if (value >= 1 && value <= 4) return 'square-wrap-first';
      if (value >= 5 && value <= 8) return 'square-wrap-second';
      if (value >= 9 && value <= 12) return 'square-wrap-third ';
      if (value >= 13 && value <= 15) return 'square-wrap-foured';
    }
    else return 'square-wrap-empty';
  }

  return (
    <div onClick={onSwap} className={handleClassNames()}>
      <span className={value? 'numerical-square' : 'empty-square'}>
        {value}
      </span>
    </div>
  );
}

export default PlaySquare;
