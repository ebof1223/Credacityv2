const Header = () => {
  return (
    <div>
      <div className="navbar flex justify-around  bg-base-100">
        <a className="btn-ghost btn border border-r-4 px-48  text-xl normal-case">
          Personal
        </a>
        <a className="btn-ghost btn px-48 text-xl  normal-case">Business</a>
      </div>
      <div className="navbar justify-around bg-base-100 ">
        <a className="btn-ghost btn text-xl  normal-case">American Express</a>
        <a className="btn-ghost btn text-xl normal-case">Chase</a>
        <a className="btn-ghost btn text-xl normal-case">Capital One</a>
        <a className="btn-ghost btn text-xl normal-case">Bank of America</a>
        <a className="btn-ghost btn text-xl normal-case">Citi</a>
        <a className="btn-ghost btn text-xl normal-case">U.S Bank</a>
      </div>
    </div>
  );
};

export default Header;
