import { useContext } from "react";
import { AppData } from "~/context/AppData";
import Card from "./Card";

const Display = () => {
  const { display } = useContext(AppData);
  return (
    <div className="mx-auto grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 ">
      {display.map((card) => (
        <Card props={card} key={`display,${card.name}`} />
      ))}
    </div>
  );
};
export default Display;
