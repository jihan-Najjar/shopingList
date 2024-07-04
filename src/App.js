import React, { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import ShopingList from "./components/ShopingList";


const App = () => {
  const [visibleCart, setVisibleCart] = useState(true);
  const [shopingList, setShopingList] = useState([]);

  const handleOnClick = () => {
    setVisibleCart((prev) => !prev);
  };
  // const handleShopingList=()=>{
  //   setShopingList((prev) => [
  //     ...prev,
  //     { name: item.name, numberOfparts: 1, price: item.price },
  //   ])
  // }

  return (
    <div>
      <Header onClick={handleOnClick} />
      {visibleCart ? <Card  setShopingList={setShopingList} /> : <ShopingList shopingList={shopingList} setShopingList={setShopingList} />}
    </div>
  );
};

export default App;
