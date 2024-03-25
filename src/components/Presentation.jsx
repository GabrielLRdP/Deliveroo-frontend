const Presentation = (props) => {
  const { title, description, imgSrc } = props;
  return (
    <section className="presentation">
      <div className="container">
        <div className="left-panel">
          <h1>{title}</h1>
          <p className="baseline">{description}</p>
        </div>
        <div className="right-panel">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
