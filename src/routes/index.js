// import {}
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/**
 * Importar as rotas
 */
import Login from "../routes/Login";
import Home from "../routes/Home";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SlidePoducts from "../components/SlideProducts";
import Shop from "../components/Shop";
import Cart from "../components/cart/Cart";

import { Juice, Smoothie } from "../components/products/productsStoreData";

import { useSelector } from "react-redux";

import "../css/index.css";

const Routes = () => {
  const isLogged = useSelector((state) => state.login.email);

  return (
    <Router>
      <Switch>
        {isLogged ? (
          <>
            <Header />

            <Route path="/" exact component={Home} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/slide-poducts" exact component={SlidePoducts} />
            <Route
              path="/shop"
              exact
              render={() => <Shop header="Juice Shop" data={Juice} />}
            />
            <Route
              path="/shop"
              exact
              render={() => <Shop header="Smoothie Shop" data={Smoothie} />}
            />
            <Route path="/shop" exact component={Cart} />
            <Footer />
          </>
        ) : (
          <Route path="/" exact component={Login} />
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
