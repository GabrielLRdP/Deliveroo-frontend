const Nav = (props) => {
  let { categoryList } = props;
  let navList = categoryList.map((element, index) => {
    return (
      <a href={"#" + element.layoutId} key={index}>
        {element.label}
      </a>
    );
  });
  return (
    <nav>
      <div className="container">{navList}</div>
    </nav>
  );
};

export default Nav;
