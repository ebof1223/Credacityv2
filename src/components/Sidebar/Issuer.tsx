const Issuer = () => {
  return (
    <div className="mx-auto flex flex-col items-start">
      <div className="flex flex-col  ">
        <div className="flex pb-5 pt-5 ">
          <input type="checkbox" className="checkbox checkbox-sm " />
          <label htmlFor="American Express" className="ml-2">
            American Express
          </label>
        </div>
        <div className="flex">
          <input type="checkbox" className="checkbox checkbox-sm  " />
          <label htmlFor="Chase" className="ml-2">
            Chase
          </label>
        </div>
      </div>

      <div className="flex flex-col  ">
        <div className="flex pb-5 pt-5 ">
          <input type="checkbox" className="checkbox checkbox-sm " />
          <label htmlFor="Bank of America" className="ml-2">
            Bank of America
          </label>
        </div>
        <div className="flex">
          <input type="checkbox" className="checkbox checkbox-sm " />
          <label htmlFor="US Bank" className="ml-2">
            US Bank
          </label>
        </div>
      </div>
      <div className="flex flex-col  ">
        <div className="flex pb-5 pt-5 ">
          <input type="checkbox" className="checkbox checkbox-sm " />
          <label htmlFor="Capital One" className="ml-2">
            Capital One
          </label>
        </div>
        <div className="flex">
          <input type="checkbox" className="checkbox checkbox-sm " />
          <label htmlFor="Citi" className="ml-2">
            Citi
          </label>
        </div>
      </div>
      <div className="flex flex-col  ">
        <div className="flex pb-5 pt-5 ">
          <input type="checkbox" className="checkbox checkbox-sm " />
          <label htmlFor="Barclays" className="ml-2">
            Barclays
          </label>
        </div>
        <div className="flex">
          <input type="checkbox" className="checkbox checkbox-sm " />
          <label htmlFor="Wells Fargo" className="ml-2">
            Wells Fargo
          </label>
        </div>
      </div>
    </div>
  );
};
export default Issuer;
