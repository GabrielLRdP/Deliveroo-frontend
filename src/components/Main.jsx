import Category from "./Category";

const Main = (props) => {
  const datas = props.data;
  const categoriesList = datas.layoutGroups[0].layouts;
  const categoriesListFiltered = categoriesList.filter((element) => {
    return element.header !== null;
  });

  const displayCategories = categoriesListFiltered.map((element, index) => {
    return (
      <Category
        key={element.key}
        title={element.header}
        datas={datas.items}
        id={element.key}
      />
    );
  });

  return (
    <div className="container">
      <section className="left-panel">{displayCategories}</section>
      <section className="right-panel"></section>
    </div>
  );
};

export default Main;
