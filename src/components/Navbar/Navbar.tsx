import { type ChangeEvent, useContext, useState } from 'react';

import { AppData } from '~/context/AppData';

import Search from './Search';
import Login from './Login';

import cards__mock from '~/data/cards__mock';
import getAbsStrMatch from '~/functions';

const Navbar = () => {
  const { results, setResults } = useContext(AppData);
  const [search, setSearch] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cards = [...cards__mock];
    const { value } = e.target;
    setSearch(value);
    setResults(
      cards.filter(
        (card) => getAbsStrMatch(card.name, value) || (card.issuer, value)
        // card.name
        //   .toLowerCase()
        //   .replace(/\s+/g, "")
        //   .includes(value.toLowerCase().replace(/\s+/g, "")) ||
        // card.issuer
        //   .toLowerCase()
        //   .replace(/\s+/g, "")
        //   .includes(value.toLowerCase().replace(/\s+/g, ""))
      )
    );
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = '';
    setSearch('');
    setResults([]);
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
          {search && <Search props={{ results, search }} />}
        </div>
      </div>
      <Login />
    </div>
  );
};
export default Navbar;
