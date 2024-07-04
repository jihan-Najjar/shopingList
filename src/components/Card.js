import React, { useState } from "react";
import { data } from "./Data";
const Card = ({ setShopingList }) => {
  const card = data.map((item) => (
    <li key={item.id} className="listItem d-flex">
      <img
        alt={`card ${item.image}`}
        src={item.image}
        loading="lazy"
        style={{ height: "300px", width: "300px", overflow: "hidden" }}
      />
      <h3 className="hPadding">{item.name}</h3>

      <section className="d-flex hPadding">
        <h5>{item.price}$ </h5>
        <button
          onClick={() => {
            setShopingList((prev) => {
              if (prev.find((i) => i.id === item.id)) {
                return prev.map((i) =>
                  i.id === item.id
                    ? { ...i, numberOfparts: i.numberOfparts + 1 }
                    : i
                );
              } else {
                return [...prev, { ...item, numberOfparts: 1 }];
              }
            });
          }}
        >
          <img
            className="cartShop"
            src={require("../assets/icons8-shopping-cart-48.png")}
            alt="cart shopping icon"
          />
        </button>
      </section>
    </li>
  ));
  return (
    <div className="card">
      <ul className="d-flex">{card}</ul>
    </div>
  );
};

export default Card;
