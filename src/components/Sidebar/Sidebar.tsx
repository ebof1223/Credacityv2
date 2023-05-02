import AlertXS from "../Navbar/AlertXS";
import Search from "../Navbar/Search";
import Issuers from "./Issuers";
import Miscellaneous from "./Miscellaneous";
import Networks from "./Networks";
import Reapply from "./Reapply";
import Type from "./Types";
import Utility from "./Utility";

import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Sidebar = () => {
  const { filters, setFilters, reapply } = useContext(AppData);
  const handleClick = () => {
    const issuer = { ...filters.issuer };
    Object.values(issuer).every(Boolean)
      ? Object.keys(issuer).forEach(
          (v) => (issuer[v as keyof typeof issuer] = false)
        )
      : Object.keys(issuer).forEach(
          (v) => (issuer[v as keyof typeof issuer] = true)
        );
    setFilters({ ...filters, issuer });
  };

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <div className="menu w-80 bg-base-300 p-4 text-base-content">
        <div className="mb-3 flex items-center lg:hidden">
          <Search />
          {reapply && <AlertXS />}
        </div>
        <div className="logo">Churn.io</div>
        <div className="border-l-2 border-indigo-400 pl-2">
          <span className="text-sm text-[#A6adbb]">Type</span>
          <Type />
        </div>
        <div className="mt-3 border-l-2 border-indigo-400 pl-2">
          <span className="text-sm text-[#A6adbb] ">Issuer</span>
          <Issuers />
        </div>
        <button className="btn-primary btn-sm btn mt-4 " onClick={handleClick}>
          Toggle All
        </button>
        <div className="mt-4 border-l-2 border-indigo-400 pl-2">
          <span className="text-sm text-[#A6adbb] ">Networks</span>
          <Networks />
        </div>
        <div className="mt-3 border-l-2 border-indigo-400 pl-2">
          <span className="text-sm text-[#A6adbb] ">Utility</span>
          <Utility />
        </div>
        <div className="mt-3 border-l-2 border-indigo-400 pl-2">
          <span className="text-sm text-[#A6adbb] ">Miscellaneous</span>
          <Miscellaneous />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
