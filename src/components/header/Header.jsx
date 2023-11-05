import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQty = useSelector((state) => state.Cart.totalQty);

  return (
    <header className="header-container">
      <h1>
        <NavLink to="/">eStore</NavLink>
      </h1>
      <nav className="navbar">
        <NavLink to="/cart" className="nav-cart">
          <FaShoppingCart className="cart" />
          {totalQty > 0 ? <span>{totalQty}</span> : <span> </span>}
        </NavLink>
        <NavLink className="about-me" to="/about">
          About Me
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
