import { type ChangeEvent, useContext, useState } from "react";

import { AppData } from "~/context/AppData";

import Results from "./Results";

import cards__mock from "~/data/cards__mock";

const Search = () => {
  const { setResults } = useContext(AppData);
  const [search, setSearch] = useState("");

  const getAbsStrMatch = (card1: string, value: string): boolean => {
    return card1
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(value.toLowerCase().replace(/\s+/g, ""));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cards = [...cards__mock];
    const { value } = e.target;
    setSearch(value);
    setResults(
      cards.filter(
        (card) =>
          getAbsStrMatch(card.name, value) || getAbsStrMatch(card.issuer, value)
      )
    );
  };
  return (
    <>
      <div className="flex items-center justify-start">
        <div className="dropdown">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input w-52"
            onChange={(e) => {
              handleChange(e);
            }}
            value={search}
          />
          {search && <Results props={{ search, setSearch }} />}
        </div>
      </div>
    </>
  );
};
export default Search;
