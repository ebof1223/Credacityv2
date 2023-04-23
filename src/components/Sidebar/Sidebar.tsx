import Issuers from "./Issuers";
import Networks from "./Networks";
import Types from "./Types";

const Sidebar = () => {
  return (
    <div className="flex w-6/12 max-w-md flex-col justify-center border-r-[1px] border-slate-500">
      <Types />
      <div className="divider" />
      <Issuers />
      <button className="btn-primary btn mx-auto mt-2 lg:btn-wide">
        Toggle All
      </button>
      <div className="divider" />
      <Networks />
    </div>
  );
};

export default Sidebar;
