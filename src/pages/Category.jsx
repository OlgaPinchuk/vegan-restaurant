//Project files
import List from "../components/List";
import ProductCard from "../components/ProductCard";
import { menu } from "../data/menu";

export default function Category({ match}) {
  const routerID = match.params.title;
  const {name, description, options} = menu.find((item) => item.name === routerID);
  console.log(name);

 
  return (
    <article className="products-category">
       <section className="hero">
        <h1>{name}</h1>
      </section>
      <p className="page-description">{description}</p>
      <List list={options} Component={ProductCard}/>
    </article>
  )
}
