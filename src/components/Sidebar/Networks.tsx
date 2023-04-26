import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Networks = () => {
  const { filters, setFilters } = useContext(AppData);

  const handleChange = (update: string) => {
    const bool = !filters.network[update as keyof boolean];
    const network = { ...filters.network, [update]: bool };
    setFilters({ ...filters, network });
  };
  return (
    <div className="mx-auto mt-4 flex flex-col items-start lg:flex-row lg:justify-between">
      <div className="flex items-center ">
        <input
          checked={filters.network.visa}
          type="checkbox"
          className="checkbox checkbox-sm "
          onChange={() => handleChange("visa")}
        />
        <label htmlFor="Visa" className="ml-1 mr-2">
          Visa
        </label>
      </div>
      <div className="flex items-center ">
        <input
          type="checkbox"
          checked={filters.network.mastercard}
          className="checkbox checkbox-sm"
          onChange={() => handleChange("mastercard")}
        />
        <label htmlFor="Mastercard" className="ml-1 mr-2">
          Mastercard
        </label>
      </div>

      <div className="flex items-center  ">
        <input
          type="checkbox"
          checked={filters.network.americanexpress}
          className="checkbox checkbox-sm "
          onChange={() => handleChange("americanexpress")}
        />
        <label htmlFor="American Express" className="ml-1 mr-2">
          Amex
        </label>
      </div>
      <div className="flex items-center ">
        <input
          type="checkbox"
          checked={filters.network.discover}
          className="checkbox checkbox-sm"
          onChange={() => handleChange("discover")}
        />
        <label htmlFor="Discover" className="ml-1">
          Discover
        </label>
      </div>
    </div>
  );
};
export default Networks;
