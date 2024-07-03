import React, { useState } from "react";
import { data } from "./Data";
import {shoping} from "./ShopingList"

const Card = () => {
  const [shopingList,setShopingList]=useState(shoping)
  const card = data.map((item, index) => (
    <li key={index} className="listItem d-flex">
      <img
        alt={`card ${item.image}`}
        src={item.image}
        loading="lazy"
        style={{ height: "300px", width: "300px", overflow: "hidden" }}
      />
      <h3 className="hPadding">{item.name}</h3>

      <section className="d-flex hPadding" >

        <h5>{item.price}$ </h5>
        <button onClick={()=>setShopingList(prev=>[...prev,{name:item.name,numberOfparts:1,price:item.price}])}>
        <img className="cartShop" src={require("../assets/icons8-shopping-cart-48.png")} alt="cart shopping icon" />

        </button>
      </section>
    </li>
  ));
  console.log(shopingList)
  return (
    <div className="card">
      <ul>{card}</ul>
    </div>
  );
};

export default Card;
