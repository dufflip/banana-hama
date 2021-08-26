import React from "react";

import { useSelector, useDispatch } from "react-redux";
import Product from "../components/cart/Product";

import { ACTION_cart_remove } from "../store/ducks/cartCEP";

import { Link } from "react-router-dom";

import "../css/firstStep.css";
import DisplayCoupon from "./DisplayCoupon";

const CartProductsPayment = ({ className }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const coupon = useSelector((state) => state.cart.coupon);

  const hasProducts = cart.length > 0;

  const nodes = hasProducts ? (
    cart.map((product, index) => (
      <div>
        <Product
          title={product.name}
          price={product.price}
          key={`key_cart_${product.uuid}`}
        />
        <button
          className="delete-button-FS"
          onClick={() => dispatch(ACTION_cart_remove(product.uuid))}
        >
          X
        </button>
      </div>
    ))
  ) : (
    <em>You don't have any products!</em>
  );

  const total = () => {
    const sum = cart.reduce((valor, product) => {
      valor += product.price;
      return valor;
    }, 0);

    // total = total - (total/100 * porcentagem)
    if (coupon.discount) {
      return sum - (sum / 100) * coupon.discount;
    }

    return sum;
  };

  return (
    <div className={className}>
      <section className="section-FS" id="menu">
        <div className="div-FS">
          <h2>Your Cart</h2>
          <h3>{nodes}</h3>

          <DisplayCoupon />

          <p>
            Total:{" "}
            {total().toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </p>
          <Link
            to="/second-step"
            className="button-FS"
            disabled={hasProducts ? "" : "disabled"}
          >
            Checkout
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CartProductsPayment;
