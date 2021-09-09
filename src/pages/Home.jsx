//Npm files
// import { Link } from "react-router-dom";

//Project files
import List from "../components/List";
import Card from "../components/Card";
import { menu } from "../data/menu";

export default function Home() {
  return (
    <article className="home-page">
      <section className="hero">
        <h1>Beyond Meat</h1>
        <h2 className="slogan">Delicious. Home made. Plant-based.</h2>
      </section>
      <section className="menu">
        <List list={menu} Component={Card}>
          {/* <Link to="">View menu</Link> */}
        </List>
      </section>
    </article>
  );
}
