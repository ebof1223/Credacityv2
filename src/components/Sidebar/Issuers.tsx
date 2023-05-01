import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Issuers = () => {
  const { filters, setFilters } = useContext(AppData);
  const handleChange = (update: string) => {
    const bool = !filters.issuer[update as keyof boolean];
    const issuer = { ...filters.issuer, [update]: bool };
    setFilters({ ...filters, issuer });
  };

  return (
    <div className="mx-auto flex flex-col items-start">
      {[
        ["American Express", "Chase"],

        ["Bank of America", "US Bank"],

        ["Capital One", "Citi"],

        ["Barclays", "Wells Fargo"],
      ].map((block, i) => (
        <div className="flex flex-col" key={`block ${i + 1}`}>
          {block.map((iss) => (
            <div className="flex pb-3 pt-3 " key={iss}>
              <input
                type="checkbox"
                className="checkbox checkbox-sm  "
                checked={
                  filters.issuer[
                    iss
                      .toLowerCase()
                      .replace(/\s+/g, "") as keyof typeof filters.issuer
                  ]
                }
                onChange={() =>
                  handleChange(iss.toLowerCase().replace(/\s+/g, ""))
                }
              />
              <label
                className="ml-2
             text-sm
              "
              >
                {iss}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Issuers;
