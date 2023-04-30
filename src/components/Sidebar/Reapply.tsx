import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Reapply = () => {
  const { filters, setFilters, setReapply } = useContext(AppData);

  const handleClick = () => {
    setReapply(false);
    setFilters({ ...filters });
  };

  return (
    <li>
      <div className="mt-5 flex justify-center">
        <button className="btn-primary btn" onClick={handleClick}>
          Reapply
        </button>
      </div>
    </li>
  );
};

export default Reapply;
