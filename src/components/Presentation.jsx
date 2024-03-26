const Presentation = (props) => {
  const { title, description, imgSrc } = props;

  const correctedDescription = description.replace(".NeighborhoodName", "");
  return (
    <section className="presentation">
      <div className="container">
        <div className="left-panel">
          <h1>{title}</h1>
          <p className="baseline">{correctedDescription}</p>
        </div>
        <div className="right-panel">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
