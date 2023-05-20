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
  const { search } = props;
  const {
    setDisplay,
    results,
    setReapply,
    setCurrent,
    breadcrumbs,
    setBreadcrumbs,
  } = useContext(AppData);

  const handleResults = () => {
    setDisplay([...results]);
    setReapply(true);
  };

  const handleResult = (props: CardData) => {
    setCurrent(props);
    if (breadcrumbs.some((card) => card.name == props.name)) return;
    breadcrumbs.length > 2
      ? setBreadcrumbs([...breadcrumbs.slice(1), props])
      : setBreadcrumbs([...breadcrumbs, props]);
  };

  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu rounded-box z-50 w-80 bg-base-100 p-4 shadow"
    >
      {results.slice(0, 5).map((item) => (
        <li
          key={`search-result,${item.name}`}
          tabIndex={0}
          onClick={() => handleResult(item)}
        >
          <label className="flex w-full" htmlFor="my-modal-4">
            <Image
              loader={() => "https://www.offeroptimist.com/" + item.imageUrl}
              src={"https://www.offeroptimist.com/" + item.imageUrl}
              width={50}
              height={50}
              alt={item.name}
              unoptimized
            />
            {item.name}
          </label>
        </li>
      ))}
      {results.length > 5 && (
        <li tabIndex={0}>
          <label
            className="w-full justify-center text-xs"
            htmlFor="my-drawer-3"
            onClick={() => handleResults()}
          >
            See more results
          </label>
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
