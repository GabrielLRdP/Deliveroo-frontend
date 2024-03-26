import { useState } from "react";

import CartElement from "./CartElement";

const Panier = (props) => {
  const { cartList } = props;

  let cartContent = [];
  const [cartCounterList, setCartCounterList] = useState([]);

  if (cartList.length > 0) {
    cartContent = cartList.map((element, index) => {
      return (
        <CartElement
          key={index}
          index={index}
          quantity={element.quantity}
          title={element.title}
          price={element.price}
          cartCounterList={cartCounterList}
          setCartCounterList={setCartCounterList}
        />
      );
    });
  }

  return cartList.length > 0 ? (
    <section>
      <button className="btn-validate-basket">Valider mon panier</button>
      {cartContent}
    </section>
  ) : (
    <section>Votre panier est vide</section>
  );
};

export default Panier;
