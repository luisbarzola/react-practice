import { useState } from "react"
import Board from "./components/Board"
import OrderBy from "./components/OrderBy"

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [orderByAsc, setOrderByAsc] = useState(true)


  const xIsNext = currentMove % 2 === 0
  const currentSquare = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0,currentMove+1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  function handleChangeOrderBy() {
    setOrderByAsc(!orderByAsc)
  }


  const moves = (orderByAsc ? Array.from(history.keys()) : Array.from(history.keys()).reverse()).map((move, _) => {
    const description = move > 0 ? `Ir al movimiento # ${move}` : 'Ir al inicio del juego'

    if (move === currentMove) {
      return (
        <li key={move}>
          <span>Estás en el movimiento #{move}</span>
        </li>
      )
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })


  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <OrderBy orderByAsc={orderByAsc} onChangeOrderBy={handleChangeOrderBy}/>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}