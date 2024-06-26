import Category from "./Category";
import Panier from "./Panier";
import Nav from "./Nav";
import { useState } from "react";

const Main = (props) => {
  const datas = props.data;
  const categoriesList = datas.layoutGroups[0].layouts;
  const categoriesListFiltered = categoriesList.filter((element) => {
    return element.header !== null;
  });
  const categoriesLayout = datas.layoutNavigation;

  const [cartList, setCartList] = useState([]);

  const displayCategories = categoriesListFiltered.map((element, index) => {
    return (
      <Category
        key={element.key}
        title={element.header}
        datas={datas.items}
        id={element.key}
        setCartList={setCartList}
        cartList={cartList}
      />
    );
  });

  return (
    <section>
      <Nav categoryList={categoriesLayout} />
      <div className="container">
        <section className="left-panel">{displayCategories}</section>
        <section className="right-panel">
          <Panier cartList={cartList} setCartList={setCartList} />
        </section>
      </div>
    </section>
  );
};

export default Main;
