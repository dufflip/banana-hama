import React, { useState, useEffect } from "react";

import CloudUp from "./CloudUp";

import "../css/imageSlider.css";

import faceIcon from "../images/icon-facebook.png";
import instagramIcon from "../images/icon-instagram.png";
import twitterIcon from "../images/icon-twitter.png";

// import productsData from "./products/productsData";

import { API_storeII } from "../fake-api/api";

const ImageSlider = ({ type }) => {
  const [state, setState] = useState({
    products: [],
    loading: true,
    error: false,
  });

  const updateState = (updates) =>
    setState((state) => ({ ...state, ...updates }));

  useEffect(() => {
    API_storeII(type).then((products) =>
      updateState({ products, loading: false })
    );
  }, []);
  // const [state, setState] = useState(productsData[0]);

  return (
    <div className="section-IS">
      <div className="bg-IS" sytle={{ backgroundColor: state.color }}></div>
      <section className="mainSection-IS">
        <div className="textBox-IS">
          <h2>Eat Fresh Everyday</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry, when an unknown
            printer took a galley.
          </p>
          <a href="/shop">Delivery</a>
        </div>
        <div className="imgBox-IS">
          <img src={state.img} className="fruits" />
        </div>
      </section>
      {state.loading ? (
        "Carregando..."
      ) : (
        <ul className="thumb-IS">
          {state.products.map((product) => (
            <li
              key={product.key}
              data-text={product.name}
              onClick={() => setState(product)}
              className={product.key === state.key ? "check active" : "check"}
            >
              <img src={product.img} />
            </li>
          ))}
        </ul>
      )}
      <ul className="social-IS">
        <li>
          <a href="#">
            <img src={faceIcon} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagramIcon} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitterIcon} />
          </a>
        </li>
      </ul>
      <CloudUp />
    </div>
  );
};

export default ImageSlider;
