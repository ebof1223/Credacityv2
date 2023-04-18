const Issuer = () => {
  //useState to track boolean values for each button

  const handleClick = () => {
    console.log("first");
  };
  return (
    <ul
      rounded-md
      shadow-sm
      role="group"
      className="btn-group"
      onClick={() => handleClick()}
    >
      <li>
        <button className="btn-child w-60">American Express</button>
      </li>
      <li>
        <button className="btn-child w-60">Chase</button>
      </li>
      <li>
        <button className="btn-child w-60">Capital One</button>
      </li>
      <li>
        <button className="btn-child w-60">Bank of America</button>
      </li>
      <li>
        <button className="btn-child w-60">Citi</button>
      </li>
      <li>
        <button className="btn-child w-60">US Bank</button>
      </li>
    </ul>
  );
};

export default Issuer;
