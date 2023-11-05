import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnAddToCart = () => {
    dispatch(addToCart(product));

    navigate("/cart");
  };

  return (
    <article className="product-item-container">
      <picture>
        <img src={product.image} alt={product.name} />{" "}
      </picture>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price">
          <h3>${product.price}</h3>
          <button onClick={OnAddToCart}>Add To Cart</button>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
