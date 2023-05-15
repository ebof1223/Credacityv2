import { useContext } from "react";
import { AppData } from "~/context/AppData";
import Card from "./Card";

const Grid = () => {
  const { display } = useContext(AppData);
  return (
    <article className="mx-auto mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 ">
      {display.map((card) => (
        <Card props={card} key={`grid-view,${card.name}`} />
      ))}
    </article>
  );
};
export default Grid;
