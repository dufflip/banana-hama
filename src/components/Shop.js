import React from "react";

import "../css/shop.css";

import { useDispatch } from "react-redux";
import { ACTION_addToCart } from "../store/ducks/cart";

import { RiShoppingBasket2Line } from "react-icons/ri";

const Shop = ({ data, header }) => {
  const dispatch = useDispatch();

  return (
    <div className="body-SH">
      <section className="section-SH">
        <header className="header-SH">
          <h2>{header}</h2>
        </header>
        <div className="shop-container-SH">
          <div className="data-SH">
            {data.map((product, index) => {
              return (
                <article className="card-SH" key={index}>
                  <div className="img-box-SH">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="content-SH">
                    <div className="poduct-name-SH">
                      <h3>{product.name}</h3>
                    </div>
                    <div className="poduct-price-SH">
                      <h2>{product.price}</h2>
                      <button
                        className="poduct-button-SH"
                        onClick={() => dispatch(ACTION_addToCart(product))}
                      >
                        <RiShoppingBasket2Line />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
