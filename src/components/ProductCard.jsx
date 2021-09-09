//Npm files
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  const { slug, name, shortDescription, image } = item;
  const [dir, img] = image.split("/");
  const imageSrc = require(`../assets/images/${dir}/${img}`).default;
  
  return (
    <Link to={`/${dir}/${slug}`}>
      <section className="card product-card">
        <img src={imageSrc} alt="Card" />
        <div className="product description">
          <h2 className="product card-header">{name}</h2>
          <p>{shortDescription}</p>
        </div>
      </section>
    </Link>
  );
}
