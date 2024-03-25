const Item = (props) => {
  const { title, imageSrc, price, description } = props;
  return (
    <div className="item">
      <div className="text">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p>{price}</p>
      </div>
      <img src={imageSrc} alt="" />
    </div>
  );
};

export default Item;
