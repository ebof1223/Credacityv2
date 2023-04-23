const Utility = () => {
  return (
    <div className="mx-auto flex flex-col items-start lg:flex-row lg:items-center lg:pt-5">
      <div className="flex items-center pb-5 pt-5 lg:pb-1 lg:pt-1">
        <input type="checkbox" className="checkbox checkbox-sm " />
        <label htmlFor="Travel" className="ml-2">
          Travel
        </label>
      </div>
      <div className="flex items-center ">
        <input type="checkbox" className="checkbox checkbox-sm lg:ml-5" />
        <label htmlFor="Cashback" className="ml-2">
          Cashback
        </label>
      </div>
    </div>
  );
};
export default Utility;
