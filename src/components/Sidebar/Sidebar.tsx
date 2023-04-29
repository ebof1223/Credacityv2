import Issuers from './Issuers';
import Miscellaneous from './Miscellaneous';
import Networks from './Networks';
import Types from './Types';
import Utility from './Utility';

import { useContext } from 'react';
import { AppData } from '~/context/AppData';

const Sidebar = () => {
  const { filters, setFilters } = useContext(AppData);

  const handleClick = () => {
    const issuer = { ...filters.issuer };
    Object.values(issuer).every(Boolean)
      ? Object.keys(issuer).forEach((v) => (issuer[v as keyof boolean] = false))
      : Object.keys(issuer).forEach((v) => (issuer[v] = true));
    setFilters({ ...filters, issuer });
  };

  return (
    <div className=" flex flex-col border-slate-500 md:w-5/12 md:border-r-[1px]">
      <Types />
      <div className="divider" />
      <Issuers />
      <button
        className="btn-primary btn mx-auto mt-4 lg:btn-wide"
        onClick={handleClick}
      >
        Toggle All
      </button>
      {/* handlechange abstract */}
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
