import { useContext } from "react";
import { AppData } from "~/context/AppData";

const ReapplyDisabled = () => {
  const { filters, setFilters, setReapply, reapply } = useContext(AppData);

  const handleClick = () => {
    setReapply(false);
    setFilters({ ...filters });
  };

  return (
    <button className="btn-sidebar" disabled onClick={handleClick}>
      Reapply
    </button>
  );
};

export default ReapplyDisabled;
