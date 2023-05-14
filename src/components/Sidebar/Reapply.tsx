import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Reapply = () => {
  const { filters, setFilters, reapply, setReapply } = useContext(AppData);
  const handleClick = () => {
    setReapply(false);
    setFilters({ ...filters });
  };

  return (
    <button
      className="btn-sidebar mt-5 py-2"
      onClick={() => handleClick()}
      {...(!reapply && { disabled: true })}
    >
      Reapply
    </button>
  );
};

export default Reapply;
