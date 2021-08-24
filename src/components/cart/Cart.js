import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";

import { Link } from "react-router-dom";

import { ACTION_checkout } from "../../store/ducks/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  console.log(cart);

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

  return (
    <section className="section-CT" id="menu">
      <div className="div-CT">
        <h2>Your Cart</h2>
        <h3>{nodes}</h3>
        {/* <p>Total: {total.toLocaleString()}</p> */}
        <Link className="button-CT" to="/first-step">
          Add to Cart
        </Link>
      </div>
    </section>
  );
};

export default Cart;
