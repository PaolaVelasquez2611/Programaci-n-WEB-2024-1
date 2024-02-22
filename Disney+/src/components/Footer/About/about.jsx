export function About({ texts }) {
  return (
    <div className="about-div" >
      {
        texts.map(({ id, text }) => (
          <p className="about" key={id}>{text}</p>
        ))
      }
    </div>

  );
}

