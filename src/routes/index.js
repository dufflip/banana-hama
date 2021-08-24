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
import FirstStep from "../components/Pay/FirstStep";
import SecondStep from "../components/Pay/SecondStep";
import ThirdStep from "../components/Pay/ThirdStep";
import FourthStep from "../components/Pay/FourthStep";
import FinalStep from "../components/Pay/FinalStep";

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

            <Route path="/" exact render={() => <Home type="ProductsData" />} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/slide-poducts" exact component={SlidePoducts} />
            <Route
              path="/shop"
              exact
              render={() => (
                <>
                  <Shop header="Juice Shop" type="juice" />
                  <Shop header="Smoothie Shop" type="smoothie" />
                  <Cart />
                </>
              )}
            />
            <Route path="/first-step" exact component={FirstStep} />
            <Route path="/second-step" exact component={SecondStep} />
            <Route path="/third-step" exact component={ThirdStep} />
            <Route path="/fourth-step" exact component={FourthStep} />
            <Route path="/final-step" exact component={FinalStep} />
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
