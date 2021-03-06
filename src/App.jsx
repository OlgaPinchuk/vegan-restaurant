// NPM packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Project files
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import "./scripts/icons";

export default function App() {
  return (
    <Router>
      <article className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/:title" component={Category} />
          <Route path="/:title/:slug" component={Product} />
        </Switch>
        <Footer />
      </article>
    </Router>
  );
}
