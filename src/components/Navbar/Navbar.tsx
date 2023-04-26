import { type ChangeEvent, useContext, useState } from "react";

import { AppData } from "~/context/AppData";

import Search from "./Search";
import Login from "./Login";

const Navbar = () => {
  const { display, setDisplay } = useContext(AppData);
  const [search, setSearch] = useState("");
  // console.log(display);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = "";
    setSearch("");
    //this will eventuall change too all the cards filtered by checks
    setDisplay([]);
  };

  return (
    <div className="navbar border-b-[1px] border-slate-500 bg-base-100 ">
      <div className="flex-1">
        <a className="btn-ghost btn font-serif text-xl normal-case">churn.io</a>
      </div>
      <div className="form-control mr-6">
        <div className="dropdown">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input w-52"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => handleBlur(e)}
          />
          {search && <Search props={{ display, search }} />}
        </div>
      </div>
      <Login />
    </div>
  );
};
export default Navbar;
