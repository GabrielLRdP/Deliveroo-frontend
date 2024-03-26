import { useState, useEffect } from "react";
import Item from "./Item";

const CartElement = (props) => {
  const { title, price, cartList, index, setCartList } = props;

  const handleCartClick = (operation) => {
    let num;
    operation === "+" ? (num = 1) : (num = -1);
    let newCartlist = [...cartList];
    newCartlist[index].quantity += num;
    newCartlist[index].totalPrice =
      newCartlist[index].quantity * newCartlist[index].price;
    newCartlist[index].quantity === 0 ? newCartlist.splice(index, 1) : true;
    setCartList(newCartlist);
  };

  const quantity = cartList[index].quantity;
  const totalPrice = cartList[index].totalPrice;

  return (
    <div className="cart-element">
      <div className="cart-counter">
        <button
          onClick={() => {
            handleCartClick("-");
          }}
        >
          -
        </button>
        <p className="quantity">{quantity}</p>
        <button
          onClick={() => {
            handleCartClick("+");
          }}
        >
          +
        </button>
      </div>
      <p className="cart-name">{title}</p>
      <p className="cart-price">{totalPrice.toFixed(2) + " €"}</p>
    </div>
  );
};

export default CartElement;
