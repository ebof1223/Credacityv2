import { type ChangeEvent, useContext, useState, useEffect } from "react";

import { AppData } from "~/context/AppData";

import Results from "./Results";

import cards__mock from "~/data/cards__mock";

const Search = () => {
  const { setResults, current, display } = useContext(AppData);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearch("");
  }, [current, display]);

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
      <nav className="z-50 flex items-center justify-start ">
        <div className="dropdown">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input"
            onChange={(e) => {
              handleChange(e);
            }}
            value={search}
            onFocus={() => setSearch("")}
            tabIndex={0}
          />
          {search && <Results props={{ search, setSearch }} />}
        </div>
      </nav>
    </>
  );
};
export default Search;
