const Item = (props) => {
  const { title, imageSrc, price, description, cartList, setCartList } = props;
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
          let newCartlist = [...cartList];
          newCartlist.push({ title: title, price: price, quantity: 1 });
          setCartList(newCartlist);
          // console.log(cartList);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Item;
