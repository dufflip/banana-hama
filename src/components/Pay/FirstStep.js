import React from "react";

import { Link } from "react-router-dom";

import Back from "../BackButton";

import CartProductsPayment from "../CartProductsPayment";

import "../../css/firstStep.css";

const FirstStep = () => {
  return (
    <>
      <div className="container-FS">
        <ul className="stages-FS">
          <li className="stage-FS">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <CartProductsPayment />
      <Link to="/shop">
        <Back />
      </Link>
    </>
  );
};

export default FirstStep;
