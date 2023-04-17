const Header__Issuer = () => {
  return (
    <ul
      rounded-md
      shadow-sm
      role="group"
      className="flex flex-wrap  justify-around border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
    >
      <li>
        <button className="btn-ghost btn text-xl  normal-case">
          American Express
        </button>
      </li>
      <li>
        <button className="btn-ghost btn text-xl  normal-case">Chase</button>
      </li>
      <li>
        <button className="btn-ghost btn text-xl  normal-case">
          Capital One
        </button>
      </li>
      <li>
        <button className="btn-ghost btn text-xl  normal-case">
          Bank of America
        </button>
      </li>
      <li>
        <button className="btn-ghost btn text-xl  normal-case">Citi</button>
      </li>
      <li>
        <button className="btn-ghost btn text-xl  normal-case">U.S Bank</button>
      </li>
    </ul>
  );
};

export default Header__Issuer;
