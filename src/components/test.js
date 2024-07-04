
import React, { useEffect, useState } from "react";

const ShopingList = ({ shopingList, setShopingList }) => {
  console.log(shopingList);

  const handleDelete = (id) => {
    setShopingList((prev) => prev.filter((item) => item.id !== id));
  };

  const [TPrice, setTPrice] = useState(0);

  // تحديث TPrice باستخدام useEffect لتجنب التحذير
  useEffect(() => {
    const totalprice = shopingList.reduce(
      (acc, item) => acc + item.price * item.numberOfparts,
      0
    );
    setTPrice(totalprice);
  }, [shopingList]);

  const list = shopingList.map((shopItem) => (
    <li key={shopItem.id} className="d-flex">
      <div className="d-flex">
        <img
          src={shopItem.image}
          alt={`shop ${shopItem.image}`}
          className="imgItemShop"
        />
      </div>
      <h3>{shopItem.name}</h3>
      <h3>{shopItem.numberOfparts}</h3>
      <h3>{shopItem.price} $</h3>
      <h3>{shopItem.price * shopItem.numberOfparts} $</h3>
      <button className="d-flex" onClick={() => handleDelete(shopItem.id)}>
        <img
          src={require("../assets/icons8-delete-24.png")}
          alt={`shop ${shopItem.image}`}
          className="cartShop"
        />
      </button>
    </li>
  ));

  return (
    <ul className="d-flex shopingList">
      <li className="d-flex">
        <h3>image</h3>
        <h3>Name</h3>
        <h3>number of parts</h3>
        <h3>price</h3>
        <h3>total</h3>
        <h3>Delete</h3>
      </li>
      {list}
      <li className="d-flex">
        <h3 className="spaceBetChar">Total Price</h3>
        <h3>{TPrice}$ </h3>
      </li>
    </ul>
  );
};

export default ShopingList;