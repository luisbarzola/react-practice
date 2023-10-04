import Square from './Square'

export default function Board({xIsNext, squares, onPlay}) {
  function handleClick(i) {
    const {winner} = calculateWinner(squares)
    if (winner || squares[i]) {
      return;
    }

    const nextSquare = squares.slice()
    nextSquare[i] = xIsNext ? '❌' : '⚪️'
    onPlay(nextSquare)
  }

  const {winner, positions} = calculateWinner(squares)
  let status = winner ? 'Ganador: ' + winner : 'Siguiente jugador: ' + (xIsNext ? '❌' : '⚪️')
  status = (!winner && isFull(squares)) ? '¡¡¡Quedaron empatados!!!' : status

  const drawBoard = [[0,1,2], [3,4,5], [6,7,8]]
  return (
    <>
      <div className="status">{status}</div>
      {drawBoard.map((_,i) => {
        return (
          <div className="board-row" key={`board-${i}`}>
          {drawBoard[i].map((p,_) => { 
            return <Square key={p} position={p} value={squares[p]} onSquareClick={() => handleClick(p)} positionsWinner={positions} /> 
          })}
          </div>
        )
      })}
    </>
  );
}

function calculateWinner(squares) {
  const positionToWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  for (let index = 0; index < positionToWin.length; index++) {
    const [a,b,c] = positionToWin[index]
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        positions: [a,b,c]
      }
    }
  }

  return {
        winner: false,
        positions: []
      }
}

function isFull(squares) {
  return squares.every(v => v !== null)
}