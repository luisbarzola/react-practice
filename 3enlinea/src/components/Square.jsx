export default function Square({value, onSquareClick, positionsWinner, position}) {
  const className = 'square' + (positionsWinner.includes(position) ? ' win' : '')

  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  )
}