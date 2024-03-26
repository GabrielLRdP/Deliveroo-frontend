import Item from "./Item";

const Category = (props) => {
  const { title, id, datas, setCartList, cartList } = props;

  const categoryItems = datas.filter((element) => {
    return (
      (element.categoryId === id ||
        (id === "a6b6337a20f8" && element.popular)) &&
      element.image
    );
  });

  const itemList = categoryItems.map((element, index) => {
    return (
      <Item
        title={element.name}
        key={element.id}
        price={element.price.formatted}
        priceNum={element.price.fractional}
        imageSrc={element.image.url}
        description={element.description}
        setCartList={setCartList}
        cartList={cartList}
      />
    );
  });
  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="items">{itemList}</div>
    </div>
  );
};

export default Category;
