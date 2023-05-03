import Image from "next/image";
import { useContext } from "react";
import { AppData } from "~/context/AppData";

interface SearchProps {
  props: {
    search: string;
    setSearch: (search: string) => void;
  };
}

const Results = ({ props }: SearchProps) => {
  const { search, setSearch } = props;
  const { setDisplay, setResults, results, setReapply } = useContext(AppData);

  const handleClick = () => {
    setDisplay([...results]);
    setResults([]);
    setSearch("");
    setReapply(true);
  };

  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu rounded-box w-80 bg-base-100 p-4 shadow"
    >
      {results.slice(0, 5).map((item) => (
        <li key={item.name} tabIndex={0}>
          <div>
            <Image
              loader={() => "https://www.offeroptimist.com/" + item.imageUrl}
              src={"https://www.offeroptimist.com/" + item.imageUrl}
              width={50}
              height={50}
              alt={item.name}
            />
            <a>{item.name}</a>
          </div>
        </li>
      ))}
      {results.length > 5 && (
        <li tabIndex={0}>
          <a onClick={handleClick} className="justify-center text-xs">
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
