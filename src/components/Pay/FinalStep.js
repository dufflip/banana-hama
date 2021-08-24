import React from "react";
import { Link } from "react-router-dom";

import CartProductsPayment from "../CartProductsPayment";
import CEPEnvio from "../CEPEnvio";
import CEPFaturamento from "../CEPFaturamento";

import Back from "../BackButton";

import "../../css/finalStep.css";

const FinalStep = () => {
  return (
    <>
      <section className="section-final-step">
        <div>
          <h2>Local de Faturamento</h2>
          <CEPFaturamento />
        </div>
        <div>
          <h2>Local de Envio</h2>
          <CEPEnvio />
        </div>
        <div>
          <h2>Produtos</h2>
          <CartProductsPayment className="cart-final-step" />
        </div>
      </section>
      <Link to="/fourth-step">
        <Back />
      </Link>
    </>
  );
};

export default FinalStep;
