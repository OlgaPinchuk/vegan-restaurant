// Npm files
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Project files
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

// Rename as App.jsx
export default function App() {
  return (
    <Router>
      <article className="App">
        <NavBar />
        <Switch>
          {/* only "/" should have exact or it is breaking due to Category and Product having similar URL's? */}
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
