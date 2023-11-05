import React from "react";
import CartItem from "../components/cart/CartItem";
import { useSelector } from "react-redux";
import CartSummary from "../components/cart/CartSummary";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.Cart);

  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      <NavLink to="/">All Products</NavLink>
      {cartItems.length > 0 ? (
        <div className="cart-items-details">
          <div className="cart-items">
            {cartItems.map((cartItem, index) => {
              return <CartItem key={index} cartItem={cartItem} />;
            })}
          </div>
          <div className="cart-amount-summary">
            <CartSummary />
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h2>Empty Cart</h2>
          <FaShoppingBasket className="empty-cart-icon" />
          <NavLink to="/">Start Shopping</NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
