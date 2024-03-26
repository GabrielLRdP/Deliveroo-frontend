import { useState } from "react";

import CartElement from "./CartElement";

const Panier = (props) => {
  const { cartList, setCartList } = props;
  let subTotalPrice = 0;
  let deliveryFee = 2.5;

  cartList.forEach((element) => {
    subTotalPrice += element.totalPrice;
  });

  const totalPrice = subTotalPrice + deliveryFee;

  let cartContent = [];

  if (cartList.length > 0) {
    cartContent = cartList.map((element, index) => {
      return (
        <CartElement
          key={index}
          index={index}
          quantity={element.quantity}
          title={element.title}
          price={element.price}
          cartList={cartList}
          setCartList={setCartList}
        />
      );
    });
  }

  return cartList.length > 0 ? (
    <section className="panier">
      <button className="btn-validate-basket">Valider mon panier</button>
      <div className="cart-content">{cartContent}</div>
      <div className="addition-details">
        <div className="sub-total">
          <p>Sous Total</p>
          <p>{subTotalPrice.toFixed(2) + " €"}</p>
        </div>
        <div className="delivery-fee">
          <p>Frais de livraison</p>
          <p>{deliveryFee + " €"}</p>
        </div>
      </div>
      <div className="total-price">
        <p>Total</p>
        <p>{totalPrice.toFixed(2) + " €"}</p>
      </div>
    </section>
  ) : (
    <section className="empty-basket">Votre panier est vide</section>
  );
};

export default Panier;
