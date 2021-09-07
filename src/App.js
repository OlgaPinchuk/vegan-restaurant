// Npm files
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Project files
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <article className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories/:id" component={Category} />
          <Route exact path="/producs/:id" component={Product} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </article>
    </Router>
  );
}
