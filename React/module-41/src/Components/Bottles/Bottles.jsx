import { useEffect, useState } from "react";

import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../Utilities/localStorage";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [purchase, setPurchase] = useState([]);

  const handlePurchase = (bottle) => {
    console.log("handle purches clicked");
    addToLS(bottle.id);
    //console.log("purchase", purchase);
    setPurchase([...purchase, bottle]);
  };

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    const cart = getStoredCart();
    console.log(bottles.length);
    let newCart = [];
    if (bottles.length > 0) {
      for (const id of cart) {
        newCart.push(bottles.find((bottle) => bottle.id === id));
      }
      setPurchase(newCart);
    }
    console.log("new cart", newCart);
  }, [bottles]);
  return (
    <div>
      <h3>Purchased : {purchase.length}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
        }}
      >
        {purchase.map((bottle, idx) => (
          <img
            key={idx}
            src={bottle.img}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
              borderRadius: "16px",
              border: "2px solid tomato",
            }}
          ></img>
        ))}
      </div>
      <h2>Total bottles : {bottles.length}</h2>
      <div className={"bottle-container"}>
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handlePurchase={handlePurchase}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
