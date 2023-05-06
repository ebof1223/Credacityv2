import { useContext } from "react";
import { AppData } from "~/context/AppData";
import Login from "./Login";
import Search from "./Search";
import Alert from "./Alert";
import Logo from "./Logo";
import Contribute from "./Contribute";

const Navbar = () => {
  const { reapply } = useContext(AppData);
  return (
    <div className="navbar flex w-full justify-between bg-base-300">
      <div>
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="btn-ghost btn flex items-center justify-start lg:invisible lg:flex-1">
          <div className=" px-1 text-xl normal-case ">Churn.io</div>
          <Logo size="sm" />
        </div>
      </div>
      <div className=" flex-none ">
        <ul className="menu-horizontal">
          <li className="mr-5 hidden lg:flex lg:items-center">
            {reapply && <Alert orientation={"left"} />}
            <Search />
          </li>
          <li>
            <Contribute />
          </li>
          <li className="ml-5">
            <Login />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
