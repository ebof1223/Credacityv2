const Type = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-around sm:pt-5">
      <div className="flex items-center pb-5 pt-5">
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
export default Type;
