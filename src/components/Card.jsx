//Npm files
import { Link } from "react-router-dom";

export default function Card({item}) {
  const {name, description, image } = item;
  const imageSrc = require(`../assets/images/${image}`).default;
 
  return (
    <section className="card">
      <img src={imageSrc} alt="Card" />
      <div className="description">
        <h2 className="card-header">{name}</h2>
        <p>{description}</p>
        <Link className="view-link" to={`/${name}`}>View menu</Link>
      </div>
    </section>
  );
}

// export default function Card({ item, children }) {
//   const imageSrc = require(`../assets/images/${item.image}`).default;
//   return (
//     <section className="card">
//       <img src={imageSrc} alt="Card" />
//       <div className="description">
//         <h2>{item.name}</h2>
//         <p>{item.description}</p>
//       </div>
//       {children}
//     </section>
//   );
// }