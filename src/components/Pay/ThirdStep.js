import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ACTION_envios } from "../../store/ducks/cartCEP";

import isValidCep from "@brazilian-utils/is-valid-cep";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../css/thirdStep.css";

import Back from "../BackButton";

import "../../css/secondStep.css";
import "../../css/firstStep.css";

const ThirdStep = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.cart);

  const [state, setState] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
    loading: false,
  });

  const updateState = (updates) =>
    setState((state) => ({ ...state, ...updates }));

  const updateField = (e) => updateState({ [e.target.name]: e.target.value });

  useEffect(() => {
    async function getCep() {
      try {
        if (isValidCep(state.cep)) {
          updateState({ loading: true });
          const response = await axios.get(
            `https://viacep.com.br/ws/${state.cep}/json/`
          );
          if (response.data.erro) {
            return updateState({
              logradouro: "Preencha os campos manualmente",
              loading: false,
            });
          }

          updateState({ ...response.data, cep: state.cep, loading: false });
        }
      } catch (error) {
        updateState({ loading: false });
      }
    }

    getCep();
  }, [state.cep]);
  return (
    <>
      <div className="container-FS">
        <ul className="stages-FS">
          <li className="stage-FS">1</li>
          <li className="stage-SS">2</li>
          <li className="stage-SS">3</li>
          <li>4</li>
        </ul>
      </div>
      <div className="container-SS">
        <form>
          <main className="main-SS">
            <h1 className="title">Endereço de Envio</h1>
            <div className="row-SS">
              <div className="inputbox-SS">
                <label className="label-SS" htmlFor="cep">
                  CEP:
                </label>
                <input
                  type="text"
                  name="cep"
                  id="cep"
                  value={state.cep}
                  onChange={updateField}
                  placeholder="CEP..."
                  disabled={state.loading}
                />
                {state.loading && <span>Procurando endereço...</span>}
              </div>
              <div className="inputbox-SS">
                <label className="label-SS" htmlFor="logradouro">
                  Logradouro:
                </label>
                <input
                  type="text"
                  name="logradouro"
                  id="logradouro"
                  value={state.logradouro}
                  onChange={updateField}
                  placeholder="Logradouro..."
                  disabled={state.loading}
                />
              </div>
            </div>
            <div className="row-SS">
              <div className="inputbox-SS">
                <label className="label-SS" htmlFor="bairro">
                  Bairro:
                </label>
                <input
                  type="text"
                  name="bairro"
                  id="bairro"
                  value={state.bairro}
                  onChange={updateField}
                  placeholder="Bairro..."
                  disabled={state.loading}
                />
              </div>
              <div className="inputbox-SS">
                <label className="label-SS" htmlFor="localidade">
                  Localidade:
                </label>
                <input
                  type="text"
                  name="localidade"
                  id="localidade"
                  value={state.localidade}
                  onChange={updateField}
                  placeholder="Localidade..."
                  disabled={state.loading}
                />
              </div>
              <div className="inputbox-SS">
                <label className="label-SS" htmlFor="uf">
                  Estado:
                </label>
                <input
                  type="text"
                  name="uf"
                  id="uf"
                  value={state.uf}
                  onChange={updateField}
                  placeholder="Estado..."
                  disabled={state.loading}
                />
              </div>
            </div>
          </main>
          <button
            className="button-SS"
            onClick={() => dispatch(ACTION_envios({ ...state }))}
          >
            <Link className="button-link-SS" to="/fourth-step">
              Checkout
            </Link>
          </button>
        </form>
      </div>
      <Link to="/second-step">
        <Back />
      </Link>
    </>
  );
};

export default ThirdStep;
