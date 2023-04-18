const Type = () => {
  //useState to track boolean values for each button
  return (
    <ul className="btn-group">
      <li mr-2>
        <button aria-current="page" className="btn-child w-96">
          Personal
        </button>
      </li>
      <li mr-2>
        <button className="btn-child w-96">Business</button>
      </li>
    </ul>
  );
};

export default Type;
