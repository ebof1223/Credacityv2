import Image from "next/image";
import type { CardData } from "~/interface";

interface SearchProps {
  props: {
    display: CardData[];
    search: string;
  };
}

const Search = ({ props }: SearchProps) => {
  const { display, search } = props;
  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu rounded-box w-80 bg-base-100 p-4 shadow"
    >
      {/* needs remove spaces and periods from target.val */}
      {display.slice(0, 5).map((item) => (
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
      {display.length > 5 && (
        <li>
          <a className="justify-center text-xs">See more results</a>
        </li>
      )}
      {!display.length && search && (
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
