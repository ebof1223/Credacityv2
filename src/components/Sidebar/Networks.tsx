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
      {["Visa", "Mastercard", "American Express"].map((net) => (
        <div className="flex items-center sm:mt-3 " key={net}>
          <input
            checked={
              filters.network[
                net
                  .toLowerCase()
                  .replace(/\s+/g, "") as keyof typeof filters.network
              ]
            }
            type="checkbox"
            className="checkbox checkbox-sm "
            onChange={() => handleChange(net.toLowerCase().replace(/\s+/g, ""))}
          />
          <label htmlFor="Visa" className="ml-1 mr-2">
            {net}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Networks;
