// Project files
import List from "../components/common/List";
import ProductCard from "../components/ProductCard";
import menu from "../data/menu.json";

export default function Category({ match }) {
  const routerID = match.params.title;
  const { name, description, options } = menu.find(
    (item) => item.name === routerID
  );

  return (
    <section className="page products-category">
      <section className="hero">
        <h1>{name}</h1>
      </section>
      <section className="category-content">
        <p className="page-description">{description}</p>
        <List list={options} Component={ProductCard} />
      </section>
    </section>
  );
}
