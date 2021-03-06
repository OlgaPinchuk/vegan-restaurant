// Project files
import menu from "../data/menu.json";
import NutritionTable from "../components/NutritionTable";

export default function Product({ match, history }) {
  const { title, slug } = match.params;
  const { options } = menu.find((item) => item.name === title);

  const { name, detailedDescription, image, ingredients } = options.find(
    (item) => item.slug === slug
  );

  const [dir, img] = image.split("/");
  const imageSrc = require(`../assets/images/${dir}/${img}`).default;

  const pills = ingredients.map((item, index) => (
    <span className="pill" key={index}>
      {item}
    </span>
  ));

  return (
    <section className="page products-category">
      <section className="hero">
        <img className="hero-image" src={imageSrc} alt="Product" />
      </section>
      <section className="page-content">
        <section className="page-description">
          <h1>{name}</h1>
          <p>{detailedDescription}</p>
        </section>
        <section className="ingredients">
          <h2>Ingredients</h2>
          <div className="pills">{pills}</div>
        </section>

        <NutritionTable product={slug} />

        <button className="back-button button" onClick={() => history.goBack()}>
          Back
        </button>
      </section>
    </section>
  );
}
