// Npm files
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="categories/dishes">
          <li>Dishes</li>
        </Link>
        <Link  to="categories/desserts">
          <li>Desserts</li>
        </Link>
        <Link to="categories/drinks"> 
          <li>Drinks</li>
        </Link>
        <Link to="/contact">
          <li>Contact us</li>
        </Link>
      </ul>
    </nav>
  );
}
