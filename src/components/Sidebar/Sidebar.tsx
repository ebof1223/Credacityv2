import Issuers from "./Issuers";
import Miscellaneous from "./Miscellaneous";
import Networks from "./Networks";
import Types from "./Types";
import Utility from "./Utility";

const Sidebar = () => {
  return (
    <div className=" flex flex-col border-slate-500 md:w-5/12 md:border-r-[1px]">
      <Types />
      <div className="divider" />
      <Issuers />
      <button className="btn-primary btn mx-auto mt-2 lg:btn-wide">
        Toggle All
      </button>
      <div className="divider" />
      <Networks />
      <div className="divider" />
      <Utility />
      <div className="divider" />
      <Miscellaneous />
    </div>
  );
};

export default Sidebar;
