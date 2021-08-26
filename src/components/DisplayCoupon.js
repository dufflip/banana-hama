import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_removeCoupon } from "../store/ducks/cartCEP";

const DisplayCoupon = () => {
  const dispatch = useDispatch();
  const coupon = useSelector((state) => state.cart.coupon);

  return coupon.label ? (
    <h4>
      {coupon.label} - {coupon.discount}%{" "}
      <button type="button" onClick={(e) => dispatch(ACTION_removeCoupon())}>
        X
      </button>
    </h4>
  ) : null;
};

export default DisplayCoupon;
