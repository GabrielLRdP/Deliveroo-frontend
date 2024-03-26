import { useState, useEffect } from "react";

const CartElement = (props) => {
  const { quantity, title, price, cartCounterList, setCartCounterList, index } =
    props;

  useEffect(() => {
    let newCartCounterList = [...cartCounterList];
    newCartCounterList.push(1);
    setCartCounterList(newCartCounterList);
  }, []);

  const handleCartClick = (operation) => {
    let num;
    operation === "+" ? (num = 1) : (num = -1);

    let newCartCounterList = [...cartCounterList];
    newCartCounterList[index] += num;

    setCartCounterList(newCartCounterList);
  };

  return (
    <div className="cart-element">
      <div className="cart-counter">
        <button onClick={handleCartClick("-")}>-</button>
        <p className="quantity">{cartCounterList[index]}</p>
        <button onClick={handleCartClick("+")}>+</button>
      </div>
      <p className="cart-name">{title}</p>
      <p className="cart-price">{price}</p>
    </div>
  );
};

export default CartElement;
