import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Reapply = () => {
  const { filters, setFilters, setReapply } = useContext(AppData);

  const handleClick = () => {
    setReapply(false);
    setFilters({ ...filters });
  };

  return (
    <div className="reapply">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 flex-shrink-0 stroke-info"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Currently not appliled</span>
      </div>
      <div className="flex-none">
        <button className="btn-primary btn-sm btn" onClick={handleClick}>
          Reapply
        </button>
      </div>
    </div>
  );
};

export default Reapply;
