const Networks = () => {
  return (
    <div className="mx-auto mt-4 flex flex-col items-start lg:flex-row lg:justify-between">
      <div className="flex items-center ">
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
      <div className="flex items-center  ">
        <input type="checkbox" className="checkbox checkbox-sm " />
        <label htmlFor="American Express" className="ml-1 mr-2">
          Amex
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
