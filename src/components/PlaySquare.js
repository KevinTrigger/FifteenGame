function PlaySquare({ value, index, onSwap }) {
  return (
    <div onClick={onSwap} className={value ? 'square-wrap' : 'square-wrap-empty'}>
      <span className={value? 'numerical-square' : 'empty-square'}>
        {value}
      </span>
    </div>
  );
}

export default PlaySquare;
