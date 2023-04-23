const Networks = () => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between lg:pt-5">
      <div className="mr-1 flex items-center pb-5 pt-5">
        <input type="checkbox" className="checkbox checkbox-sm " />
        <label htmlFor="Visa" className="ml-1 mr-2">
          Visa
        </label>
      </div>
      <div className="flex items-center ">
        <input type="checkbox" className="checkbox checkbox-sm" />
        <label htmlFor="Mastercard" className="ml-1 mr-2">
          Mastercard
        </label>
      </div>
      <div className="flex items-center pb-5 pt-5">
        <input type="checkbox" className="checkbox checkbox-sm " />
        <label htmlFor="American Express" className="ml-1 mr-2">
          American Express
        </label>
      </div>
      <div className="flex items-center ">
        <input type="checkbox" className="checkbox checkbox-sm" />
        <label htmlFor="Discover" className="ml-1">
          Discover
        </label>
      </div>
    </div>
  );
};
export default Networks;
