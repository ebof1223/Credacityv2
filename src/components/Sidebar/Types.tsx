import { useContext } from "react";
import { AppData } from "~/context/AppData";
const Types = () => {
  const { filters, setFilters } = useContext(AppData);

  const handleChange = (update: string) => {
    const bool = !filters.type[update as keyof boolean];
    const type = { ...filters.type, [update]: bool };

    setFilters({ ...filters, type });
  };
  return (
    <ul className="mx-auto mt-2 flex flex-col items-start lg:flex-row lg:items-center ">
      <ul className="flex items-center pb-4 lg:pb-1 lg:pt-1">
        <input
          type="checkbox"
          className="checkbox checkbox-sm "
          checked={filters.type.personal}
          onChange={() => handleChange("personal")}
        />
        <label className="ml-2 text-sm">Personal</label>
      </ul>
      <div className="justfy-start flex items-center ">
        <input
          type="checkbox"
          checked={filters.type.business}
          className="checkbox checkbox-sm lg:ml-5"
          onChange={() => handleChange("business")}
        />
        <label className="ml-2 text-sm">Business</label>
      </div>
    </ul>
  );
};
export default Types;
