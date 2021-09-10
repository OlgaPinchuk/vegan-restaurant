// Project files
import List from "../components/common/List";
import Card from "../components/common/Card";
import { menu } from "../data/menu";

export default function Home() {
  return (
    <article className="page home-page">
      <section className="hero">
        <h1>Beyond Meat</h1>
        <h2 className="slogan">Delicious. Home made. Plant-based.</h2>
      </section>
      <section className="menu">
        <List list={menu} Component={Card} />
      </section>
    </article>
  );
}
