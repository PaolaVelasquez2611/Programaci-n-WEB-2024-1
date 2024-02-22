export function Terms({texts}) {

  return (
    <div className="terms-div" >
      {
        texts.map(({ id, text }) => (
          <p className="terms" key={id}>{text}</p>
        ))
      }
    </div>

  );
}