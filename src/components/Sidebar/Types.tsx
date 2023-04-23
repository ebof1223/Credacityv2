const Types = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:pt-5">
      <div className="flex items-center pb-5 pt-5 lg:pb-1 lg:pt-1">
        <input type="checkbox" className="checkbox checkbox-sm " />
        <label htmlFor="Personal" className="ml-2">
          Personal
        </label>
      </div>
      <div className="flex items-center ">
        <input type="checkbox" className="checkbox checkbox-sm" />
        <label htmlFor="Business" className="ml-2">
          Business
        </label>
      </div>
    </div>
  );
};
export default Types;
