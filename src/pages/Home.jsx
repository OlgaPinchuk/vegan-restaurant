// Project files
import List from "../components/common/List";
import CategoryCard from "../components/CategoryCard";
import  menu  from "../data/menu.json";

export default function Home() {
  return (
    <section className="page home-page">
      <section className="hero">
        <h1>Beyond Meat</h1>
        <h2 className="slogan">Delicious. Home made. Plant-based.</h2>
      </section>
      <section className="menu">
        <List list={menu} Component={CategoryCard} />
      </section>
    </section>
  );
}
