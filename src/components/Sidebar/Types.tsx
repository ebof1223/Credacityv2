import { useContext, useEffect, useState } from "react";
import { DataContext } from "~/context/DataContext";
import cards__mock from "~/data/cards__mock";

const Types = () => {
  const [type, setType] = useState({ personal: true, business: true });
  const { setDisplay } = useContext(DataContext);

  useEffect(() => {
    switch (true) {
      case type.personal && type.business:
        setDisplay([...cards__mock]);
        break;
      case type.personal && !type.business:
        setDisplay([...cards__mock.filter((card) => card.isBusiness)]);
        break;
      case !type.personal && type.business:
        setDisplay([...cards__mock.filter((card) => !card.isBusiness)]);
        break;
      case !type.personal && !type.business:
        setDisplay([]);
        break;
    }
  }, [setDisplay, type]);

  const handlePersonal = () => {
    setType({ ...type, personal: !type.personal });
  };
  return (
    <div className="mx-auto flex flex-col items-start lg:flex-row lg:items-center lg:pt-7 ">
      <div className="flex items-center pb-5 pt-5 lg:pb-1 lg:pt-1">
        <input
          type="checkbox"
          className="checkbox checkbox-sm "
          checked={type.personal}
          onChange={handlePersonal}
        />
        <label htmlFor="Personal" className="ml-2">
          Personal
        </label>
      </div>
      <div className="justfy-start flex items-center ">
        <input
          type="checkbox"
          checked={type.business}
          className="checkbox checkbox-sm lg:ml-5"
          onChange={() => setType({ ...type, business: !type.business })}
        />
        <label htmlFor="Business" className="ml-2">
          Business
        </label>
      </div>
    </div>
  );
};
export default Types;
