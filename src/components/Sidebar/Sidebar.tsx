import Issuer from "./Issuer";
import Type from "./Type";

const Sidebar = () => {
  return (
    <div className="flex w-6/12 max-w-md flex-col justify-center border-r-[1px] border-slate-500">
      <Type />
      <div className="divider" />
      <Issuer />
      <button className="btn-primary btn mx-auto mt-5 lg:btn-wide">
        Toggle All
      </button>
      <div className="divider" />
    </div>
  );
};

export default Sidebar;
