import { useContext } from "react";
import { AppData } from "~/context/AppData";
import { CardData, Storage } from "~/interface";
import { getKeyValueStorage } from "~/functions";
import dp__mock from "~/data/dp__mock";
//any?
const Datapoints = () => {
  const { current } = useContext(AppData);

  const data = getKeyValueStorage(dp__mock);
  //dyanmically return modal based on whethere or not datapoints exist
  return (
    <table className="table-compact table w-full">
      <thead>
        <tr>
          <th>Username</th>
          <th>Fico</th>
          <th>Income</th>
          <th>x/3</th>
          <th>x/6</th>
          <th>x/12</th>
          <th>App Date</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {current &&
          current.name &&
          data &&
          data[current.name] != null &&
          data[current.name] !== undefined &&
          data[current.name].map((card, i) => (
            <tr key={`data points ${i}`}>
              <td>{card.Username}</td>
              <td>{card.creditScore}</td>
              <td>{card.income}</td>
              <td>{card.x3}</td>
              <td>{card.x6}</td>
              <td>{card.x12}</td>
              <td>{card.applicationDate}</td>
              {/* tool tip */}
              <td>{card.notes}</td>
            </tr>
          ))}
        {current && !data[current.name] && (
          <div
            className=" z-100 tooltip-open tooltip tooltip-right"
            data-tip="hello"
          >
            <span>Hover me</span>
          </div>
        )}
      </tbody>
    </table>
  );
};
export default Datapoints;
