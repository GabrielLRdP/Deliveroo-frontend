const Item = (props) => {
  const {
    title,
    imageSrc,
    price,
    priceNum,
    description,
    cartList,
    setCartList,
  } = props;
  return (
    <div className="item">
      <div className="text">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p>{price}</p>
      </div>
      <img src={imageSrc} alt="" />
      <button
        onClick={() => {
          const itemObject = {
            title: title,
            price: priceNum / 100,
            quantity: 1,
            totalPrice: priceNum / 100,
          };
          let isInCart = false;
          let newCartlist = [...cartList];
          let updatedCartList = [...cartList];

          updatedCartList.forEach((element) => {
            if (itemObject.title === element.title) {
              isInCart = true;
              element.quantity += 1;
              element.totalPrice = element.quantity * element.price;
            }
          });

          if (isInCart) {
            setCartList(updatedCartList);
          } else {
            newCartlist.push(itemObject);
            setCartList(newCartlist);
          }

          // console.log(cartList);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Item;
