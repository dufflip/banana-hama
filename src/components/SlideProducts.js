import React from "react";

import "../css/slideProducts.css";

import whatsnewProducts from "./products/whatsnewProducts";

const SlideProducts = () => {
  return (
    <div className="slideproduct-section-SP">
      <div className="header-SP">
        <h1>What's New</h1>
      </div>
      <section className="main-SP">
        {whatsnewProducts.map((product) => (
          <article className="card-SP">
            <div className="content-SP">
              <h3>{product.text}</h3>
              <a href="/shop">Read More</a>
            </div>
            <div className="right-content-SP">
              <h3>{product.name}</h3>
            </div>
            <img src={product.img} alt={product.name} />
          </article>
        ))}
        {/* <article className="card-SP">
          <div className="content-SP">
            <h3>
              Grape Smoothie, repeat. This is our summer song, our summer drink,
              and quite possibly the most refreshing recipe.
            </h3>
            <a href="#">Read More</a>
          </div>
          <div className="right-content-SP">
            <h3>Grape Smoothie</h3>
          </div>
          <img src={grapeSmoothie} alt="Grape Smoothie" />
        </article> */}
      </section>
    </div>
  );
};

export default SlideProducts;
