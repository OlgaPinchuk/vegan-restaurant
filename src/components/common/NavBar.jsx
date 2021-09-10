// Npm files
import { Link } from "react-router-dom";

// Project files
import logo from "../../assets/images/logo.png";

export default function NavBar() {
  return (
    <nav className="site-navigation">
      <Link to="/">
        <img className="logo" src={logo} alt="Restaurant logo" />
      </Link>

      <ul className="nav-links">
        <Link to="/dishes">
          <li>Dishes</li>
        </Link>
        <Link to="/desserts">
          <li>Desserts</li>
        </Link>
        <Link to="/drinks">
          <li>Drinks</li>
        </Link>
        <Link to="/contact">
          <li>Contact us</li>
        </Link>
      </ul>
    </nav>
  );
}
