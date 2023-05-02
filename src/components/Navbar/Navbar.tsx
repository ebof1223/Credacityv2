import { useContext } from "react";
import { AppData } from "~/context/AppData";
import Login from "./Login";
import Search from "./Search";
import Alert from "./Alert";

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
        <div className="btn-ghost btn mx-2 px-2 text-xl normal-case lg:invisible lg:flex-1 ">
          Churn.io
        </div>
      </div>
      <div className=" flex-none ">
        <ul className="menu-horizontal">
          <li className="hidden lg:flex lg:items-center">
            {reapply && <Alert orientation={"left"} />}
            <Search />
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
