import Image from "next/image";
import { useContext } from "react";
import { AppData } from "~/context/AppData";
import type { CardData } from "~/interface";

interface SearchProps {
  props: {
    search: string;
  };
}

const Search = ({ props }: SearchProps) => {
  const { search } = props;
  const { setDisplay, setResults, results } = useContext(AppData);
  // const handleChange = () => {
  //   // console.log("hello");
  // setDisplay([...results]);
  // setResults([]);
  // };

  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu rounded-box w-80 bg-base-100 p-4 shadow"
    >
      {results.slice(0, 5).map((item) => (
        <li key={item.name}>
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
        <li>
          <button className="justify-center text-xs">See more results</button>
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

export default Search;
