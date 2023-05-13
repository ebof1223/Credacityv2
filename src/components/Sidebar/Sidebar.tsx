import Alert from "../Navbar/Alert";
import Logo from "../Navbar/Logo";
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
  const { reapply } = useContext(AppData);

  return (
    <aside className="drawer-side ">
      <label htmlFor="my-drawer-3" className="drawer-overlay" />
      <div className="menu w-80 bg-base-300 p-4 text-base-content">
        <div className="flex items-center lg:hidden">
          <Search />
          {reapply && <Alert orientation={"right"} />}
        </div>
        <div className="logo mx-auto hidden items-center justify-start lg:flex">
          <span className=" px-1 text-xl normal-case ">Churn.io</span>
          <Logo size="lg" />
        </div>
        {[
          <Type key={"Type"} />,
          <Issuers key={"Issuers"} />,
          <Networks key={"Network"} />,
          <Utility key={"Utility"} />,
          <Miscellaneous key={"Miscellaneous"} />,
        ].map((component) => (
          <div
            className="mt-4 border-l-2 border-indigo-400 pl-2"
            key={component.key}
          >
            <span className="text-[#A6adbb text-sm">{component.key}</span>
            {component}
          </div>
        ))}
        <Reapply />
      </div>
    </aside>
  );
};

export default Sidebar;
