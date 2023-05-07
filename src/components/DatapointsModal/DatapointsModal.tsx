import { useContext } from "react";
import { AppData } from "~/context/AppData";

const DatapointsModal = () => {
  const { current } = useContext(AppData);
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal  cursor-pointer ">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">{current && current.name}</h3>
          <p className="py-4">{current && current.name}</p>
        </label>
      </label>
    </>
  );
};
export default DatapointsModal;
