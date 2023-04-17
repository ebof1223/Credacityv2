const Header__Type = () => {
  return (
    <ul className="flex flex-wrap  justify-around border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
      <li mr-2>
        <button
          aria-current="page"
          className="btn-ghost btn border border-r-4 px-48 text-xl normal-case "
        >
          Personal
        </button>
      </li>
      <li mr-2>
        <button className="btn-ghost btn px-48 text-xl  normal-case">
          Business
        </button>
      </li>
    </ul>
  );
};

export default Header__Type;
