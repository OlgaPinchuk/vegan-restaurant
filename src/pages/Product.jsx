export default function Product({ match, history }) {
  const routerID = match.params.title;
  return (
    <p>{routerID}</p>
  )
}

