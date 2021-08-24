import React, { Component } from "react";

import CartProductsPayment from "../CartProductsPayment";
import Back from "../BackButton";

import {
  FaMoneyCheckAlt as CreditCard,
  FaMoneyCheck as Debit,
  FaMoneyBillWave as Transfer,
} from "react-icons/fa";
import { MdMoneyOff as Coupom } from "react-icons/md";

import "../../css/fourth-step.css";
import { Link } from "react-router-dom";

class FourthStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1",
    };
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.selectedOption);
  };

  render() {
    return (
      <>
        <div className="container-FS">
          <ul className="stages-FS">
            <li className="stage-FS">1</li>
            <li className="stage-SS">2</li>
            <li className="stage-SS">3</li>
            <li className="stage-FTS">4</li>
          </ul>
        </div>
        <section className="table-FTS">
          <div className="cupom-FTS">
            <h2>Tem algum cupom?</h2>
            <ul>
              <li>
                <Coupom />
                <input type="text" />
              </li>
            </ul>
          </div>
          <div className="section-FTS">
            <h3>Escolha seu metodo de pagamento:</h3>
            <div className="form-FTS">
              <div className="col-sm-12">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-check">
                    <label>
                      <input
                        type="radio"
                        name="react-tips"
                        value="option1"
                        checked={this.state.selectedOption === "option1"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                      />
                      <CreditCard className="icons-FTS" /> Credito
                    </label>
                  </div>
                  <div className="form-check">
                    <label>
                      <input
                        type="radio"
                        name="react-tips"
                        value="option2"
                        checked={this.state.selectedOption === "option2"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                      />
                      <Debit className="icons-FTS" /> Debito
                    </label>
                  </div>
                  <div className="form-check">
                    <label>
                      <input
                        type="radio"
                        name="react-tips"
                        value="option3"
                        checked={this.state.selectedOption === "option3"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                      />
                      <Transfer className="icons-FTS" /> Transferencia
                    </label>
                  </div>
                  <div className="form-group">
                    <Link to="final-step">
                      <button className="button-SS button-FTS" type="submit">
                        Save
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <CartProductsPayment className="products-FTS" />
          <Link to="/third-step">
            <Back />
          </Link>
        </section>
      </>
    );
  }
}

export default FourthStep;
