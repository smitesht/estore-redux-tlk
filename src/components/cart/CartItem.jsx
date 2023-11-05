import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addQty, removeQty } from "../../Redux/Cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const { cartItems } = useSelector((state) => state.Cart);

  const dispatch = useDispatch();

  const OnAddQty = () => {
    dispatch(addQty(cartItem.id));
  };

  const OnRemoveQty = () => {
    dispatch(removeQty(cartItem.id));
  };

  return (
    <div className="cart-item-wrapper">
      <picture>
        <img src={cartItem.image} />
      </picture>
      <div className="cart-item-data">
        <h3>{cartItem.name}</h3>
        <p>${cartItem.price}</p>
        <div className="cart-qty">
          <button onClick={OnAddQty}>
            <FaPlus />
          </button>
          <h3>{cartItem.qty}</h3>
          <button onClick={OnRemoveQty}>
            <FaMinus />
          </button>
          <span>Total: ${cartItem.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
