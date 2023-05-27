import { useContext } from "react";
import { AppData } from "~/context/AppData";
import Card from "./Card";
import Pagination from "./Pagination";

const Grid = () => {
  const { pageDisplay } = useContext(AppData);
  return (
    <>
      <article className="-z-50 mx-auto mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
        {pageDisplay.map((card, i) => (
          <Card props={card} key={`grid-view,${(card.name, i)}`} />
        ))}
      </article>
      <Pagination />
    </>
  );
};
export default Grid;
