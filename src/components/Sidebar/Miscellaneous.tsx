const Miscellaneous = () => {
  return (
    <div className="mx-auto flex flex-col items-start">
      <div className="flex flex-col  ">
        <div className="flex pb-5 pt-5 ">
          <input type="checkbox" className="checkbox checkbox-sm " />
          <label htmlFor="Counts towards 5/24" className="ml-2">
            Counts towards 5/24
          </label>
        </div>
        <div className="flex">
          <input type="checkbox" className="checkbox checkbox-sm  " />
          <label htmlFor=" Currently highest offer" className="ml-2">
            Currently highest offer
          </label>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
