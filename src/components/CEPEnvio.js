import React from "react";
import { useSelector } from "react-redux";

const CEPEnvio = () => {
  const address = useSelector((state) => state.cart.envio);

  return (
    <div>
      <ul>
        <li>{address.cep}</li>
        <li>
          {address.localidade}
          <span> {address.uf}</span>
        </li>
        <li>{address.logradouro}</li>
        <li>{address.bairro}</li>
      </ul>
    </div>
  );
};

export default CEPEnvio;
