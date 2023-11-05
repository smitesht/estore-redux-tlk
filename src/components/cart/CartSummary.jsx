import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const { totalAmount, totalQty } = useSelector((state) => state.Cart);
  const navigate = useNavigate();

  const OnAboutMe = () => {
    navigate("/about");
  };

  return (
    <div className="cart-summary-info">
      <h2>Cart Summary</h2>
      <hr />
      <div className="price-summary">
        <h4>Total Amount:</h4>
        <span>${totalAmount}</span>
      </div>
      <div className="price-summary">
        <h4>Total Quantity: </h4>
        <span>{totalQty}</span>
      </div>
      <button onClick={OnAboutMe}>Payment</button>
    </div>
  );
};

export default CartSummary;
