import { useContext } from "react";
import { AppData } from "~/context/AppData";
const Types = () => {
  const { filters, setFilters } = useContext(AppData);

  const handlePersonalChange = () => {
    const type = {
      ...filters.type,
      personal: !filters.type.personal,
    };
    setFilters({ ...filters, type });
  };

  const handleBusinessChange = () => {
    const type = {
      ...filters.type,
      business: !filters.type.business,
    };
    setFilters({ ...filters, type });
  };
  return (
    <div className="mx-auto flex flex-col items-start lg:flex-row lg:items-center lg:pt-7 ">
      <div className="flex items-center pb-5 pt-5 lg:pb-1 lg:pt-1">
        <input
          type="checkbox"
          className="checkbox checkbox-sm "
          checked={filters.type.personal}
          onChange={handlePersonalChange}
        />
        <label htmlFor="Personal" className="ml-2">
          Personal
        </label>
      </div>
      <div className="justfy-start flex items-center ">
        <input
          type="checkbox"
          checked={filters.type.business}
          className="checkbox checkbox-sm lg:ml-5"
          onChange={handleBusinessChange}
        />
        <label htmlFor="Business" className="ml-2">
          Business
        </label>
      </div>
    </div>
  );
};
export default Types;
