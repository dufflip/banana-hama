import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdMoneyOff as Coupom } from "react-icons/md";
import { API_validateCoupon } from "../fake-api/api";
import { ACTION_addCoupon } from "../store/ducks/cartCEP";

const CouponForm = () => {
  const [{ input, loading, error }, setState] = useState({
    input: "",
    loading: false,
    error: false,
  });

  const updateState = (updates) =>
    setState((state) => ({ ...state, ...updates }));

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input || loading) {
      return false;
    }

    updateState({ error: false, loading: true });

    try {
      const response = await API_validateCoupon(input);
      dispatch(ACTION_addCoupon(response));
      updateState({ error: false, loading: false });
    } catch (error) {
      updateState({ error, loading: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Coupom />
      <input
        disabled={loading}
        type="text"
        value={input}
        onChange={(e) => updateState({ input: e.target.value })}
      />
      <button disabled={loading} type="submit">
        Validar Cupom
      </button>
      {error && <small style={{ color: "tomato" }}>{error}</small>}
    </form>
  );
};

export default CouponForm;
