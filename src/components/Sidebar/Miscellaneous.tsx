import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Miscellaneous = () => {
  const { filters, setFilters } = useContext(AppData);

  const handleChange = (update: string) => {
    const bool = !filters.misc[update as keyof boolean];
    const misc = { ...filters.misc, [update]: bool };
    setFilters({ ...filters, misc });
  };

  return (
    <div className="mx-auto mt-6 flex flex-col items-start">
      <div className="flex flex-col ">
        <div className="flex">
          <input
            type="checkbox"
            className="checkbox checkbox-sm   "
            checked={filters.misc.highestoffer}
            onChange={() => {
              handleChange("highestoffer");
            }}
          />
          <label htmlFor="Currently highest offer" className="ml-2">
            Currently highest offer
          </label>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
