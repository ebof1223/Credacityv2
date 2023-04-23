const Types = () => {
  return (
    <div className="mx-auto flex flex-col items-start lg:flex-row lg:items-center lg:pt-7 ">
      <div className="flex items-center pb-5 pt-5 lg:pb-1 lg:pt-1">
        <input type="checkbox" className="checkbox checkbox-sm " />
        <label htmlFor="Personal" className="ml-2">
          Personal
        </label>
      </div>
      <div className="justfy-start flex items-center ">
        <input type="checkbox" className="checkbox checkbox-sm lg:ml-5" />
        <label htmlFor="Business" className="ml-2">
          Business
        </label>
      </div>
    </div>
  );
};
export default Types;
