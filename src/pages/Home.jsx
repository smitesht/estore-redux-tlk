import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/product/ProductItem";

const Home = () => {
  const products = useSelector((state) => state.Products.products);

  return (
    <div className="products-container">
      {products.map((product, index) => {
        return <ProductItem key={index} product={product} />;
      })}
    </div>
  );
};

export default Home;
