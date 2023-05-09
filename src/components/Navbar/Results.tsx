import Image from "next/image";
import { useContext } from "react";
import { AppData } from "~/context/AppData";
import { type CardData } from "~/interface";

interface SearchProps {
  props: {
    search: string;
    setSearch: (search: string) => void;
  };
}

const Results = ({ props }: SearchProps) => {
  const { search, setSearch } = props;
  const { setDisplay, setResults, results, setReapply, setCurrent } =
    useContext(AppData);

  const handleResults = () => {
    setDisplay([...results]);
    setResults([]);
    setSearch("");
    setReapply(true);
  };

  const handleResult = (card: CardData) => {
    setCurrent(card);
  };

  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu rounded-box w-80 bg-base-100 p-4 shadow"
    >
      {results.slice(0, 5).map((item) => (
        <li
          key={`search-result,${item.name}`}
          tabIndex={0}
          onClick={() => handleResult(item)}
        >
          <label className="flex" htmlFor="my-modal-4">
            <Image
              loader={() => "https://www.offeroptimist.com/" + item.imageUrl}
              src={"https://www.offeroptimist.com/" + item.imageUrl}
              width={50}
              height={50}
              alt={item.name}
              unoptimized
            />
            <a>{item.name}</a>
          </label>
        </li>
      ))}
      {results.length > 5 && (
        <li tabIndex={0}>
          <a onClick={handleResults} className="w-full justify-center text-xs">
            See more results
          </a>
        </li>
      )}
      {!results.length && search && (
        <li>
          <sub className="pointer-events-none justify-start text-xs">
            No results found
          </sub>
        </li>
      )}
    </ul>
  );
};

export default Results;
