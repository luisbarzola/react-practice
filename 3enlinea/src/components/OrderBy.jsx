export default function OrderBy({orderByAsc, onChangeOrderBy}) {
  const symbol = orderByAsc ? '⬇️' : '⬆️' 

    return (
      <button onClick={onChangeOrderBy}>orderBy {symbol}</button>
    )
}
