import React from "react";
// import Card from "./Card";

const Header = ({ onClick }) => {
  return (
    <div className="header d-flex">
      <img
        alt="MALMR company logo "
        className="logo"
        src={require("../assets/LOGO.png")}
      />
      <ul className="d-flex header-nav">
        <li>
          <a href="/">Laptop</a>
        </li>
        <li>
          <a href="/">Screens</a>
        </li>
        <li>
          <a href="/">Chairs</a>
        </li>
        <li>
          <a href="/">accessories</a>
        </li>
        <li className="d-flex" onClick={onClick}>
          {/* <a href="/" > */}
          Cart
          <img
            className="cartList"
            src={require("../assets/icons8-shopping-cart-24.png")}
            alt="cart shopping icon"
          />
          {/* </a> */}
        </li>
      </ul>
    </div>
  );
};

export default Header;
