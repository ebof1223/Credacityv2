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
    <div className="mx-auto mt-2 flex flex-col items-start  lg:justify-between">
      {["Visa", "Mastercard", "American Express"].map((net) => (
        <div className="mb-2 flex items-center " key={net}>
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
          <label htmlFor={net} className="ml-1 mr-2 text-sm">
            {net}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Networks;
