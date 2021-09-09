//Project files
import { menu } from "../data/menu";

export default function Product({ match, history }) {
  const routerID = match.params.slug;
  const {name, description, options} = menu.find((item) => item.name === routerID);
  return (
    <p>{routerID}</p>
  )
}

