import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { ACTION_addToCart } from "../store/ducks/cartCEP";

import { RiShoppingBasket2Line } from "react-icons/ri";

import { API_store } from "../fake-api/api";

import "../css/loading.css";

const Shop = ({ type, header }) => {
  const [state, setState] = useState({
    products: [],
    loading: true,
    error: false,
  });

  const updateState = (updates) =>
    setState((state) => ({ ...state, ...updates }));

  const dispatch = useDispatch();

  useEffect(() => {
    API_store(type).then((products) =>
      updateState({ products, loading: false })
    );
  }, []);

  return (
    <div className="body-SH">
      <section className="section-SH">
        <header className="header-SH">
          <h2>{header}</h2>
        </header>
        <div className="shop-container-SH">
          {state.loading ? (
            <div className="loading">
              <div className="loadingio-spinner-bars-z10fd9szsbd">
                <div className="ldio-c9wvcxvusta">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="data-SH">
              {state.products.map((product, index) => {
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
                        <h2>${product.price}</h2>
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
