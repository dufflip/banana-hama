import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";

import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import { ACTION_checkout } from "../../store/ducks/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const hasProducts = cart.length > 0;

  const nodes = hasProducts ? (
    cart.map((product, index) => (
      <Product
        title={product.name}
        price={product.price}
        key={`key_cart_${product.name}_${index}`}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  const total = cart.reduce((valor, product) => {
    valor += product.price;
    return valor;
  }, 0);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1250) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <section className="section-CT" id="menu">
      {/* <div className="menu-icon-CT" onClick={handleClick}>
        {click ? <GrClose /> : <AiOutlineMenu />}
      </div> */}
      {/* <ul className={click ? "nav-menu-CT active" : "nav-menu-CT"}> */}
      <div className="div-CT">
        <h2>Your Cart</h2>
        <h3>{nodes}</h3>
        {/* <p>Total: {total.toLocaleString()}</p> */}
        <button
          onClick={() => dispatch(ACTION_checkout())}
          disabled={hasProducts ? "" : "disabled"}
        >
          Checkout
        </button>
      </div>
      {/* </ul> */}
    </section>
  );
};

export default Cart;
