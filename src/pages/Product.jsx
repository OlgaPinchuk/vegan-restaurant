//Project files
import { menu } from "../data/menu";

export default function Product({ match, history }) {
  const {title, slug} = match.params;
  const { options} = menu.find((item) => item.name === title);
  const {name, detailedDescription, image, ingredients, nutritionFacts} = options.find((item) => item.slug === slug);
  const [dir, img] = image.split("/");
  const imageSrc = require(`../assets/images/${dir}/${img}`).default;

  return (
    <article className="page products-category">
       <section className="hero">
        <img className="hero-image" src={imageSrc} alt="Product"/>
      </section>
      <div className="description">
        <h1>{name}</h1>
        <p>{detailedDescription}</p>
      </div>
      <h2>Ingredients</h2>
    </article>
  )
}

