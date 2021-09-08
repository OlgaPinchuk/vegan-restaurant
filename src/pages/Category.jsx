import { menu } from "../data/menu";

export default function Category({ match, history }) {
  const routerID = match.params.title;
  const currentParcel = menu.find((item) => item.title === routerID);
  return (
    <p>{currentParcel}</p>
  )
}
