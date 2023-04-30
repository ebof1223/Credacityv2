import Issuers from "./Issuers";
import Miscellaneous from "./Miscellaneous";
import Networks from "./Networks";
import Reapply from "./Reapply";
import Types from "./Types";
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
    <div className="drawer-side flex bg-red-500 lg:h-[calc(100vh-64px)] ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="2 mx-auto p-4 pt-5 text-base-content">
        <li>
          <Types />
          <div className="divider" />
        </li>
        <li>
          <Issuers />
          <button className="btn-primary btn ml-10 mt-4 " onClick={handleClick}>
            Toggle All
          </button>
          <div className="divider" />
        </li>
        {/* handlechange abstract */}
        <li>
          <Networks />
          <div className="divider" />
        </li>
        <li>
          <Utility />
          <div className="divider" />
        </li>
        <li>
          <Miscellaneous />
          <div className="divider" />
        </li>
        <li>{reapply && <Reapply />}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
