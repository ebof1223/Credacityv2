import { useContext } from "react";
import { AppData } from "~/context/AppData";
import { CardData, Storage } from "~/interface";
import { getKeyValueStorage } from "~/functions";
import dp__mock from "~/data/dp__mock";
import Notes from "./Notes";
//any?
const Datapoints = () => {
  const { current } = useContext(AppData);

  const data = getKeyValueStorage(dp__mock);
  //dyanmically return modal based on whethere or not datapoints exist
  return (
    <table className="table-compact mb-20 table w-full">
      <thead>
        <tr>
          <th>Username</th>
          <th>Fico</th>
          <th>Income</th>
          <th>x/3</th>
          <th>x/6</th>
          <th>x/12</th>
          <th>Recon</th>
          <th>App Date</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {current &&
          data[current.name]?.map((card, i) => (
            <tr key={`data points ${i}`} className="hover">
              <td>{card.Username}</td>
              <td>{card.creditScore}</td>
              <td>{card.income}</td>
              <td>{card.x3}</td>
              <td>{card.x6}</td>
              <td>{card.x12}</td>
              <td>{card.calledRecon}</td>
              <td>{card.applicationDate}</td>
              {card.notes ? <Notes props={card} /> : <td />}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Datapoints;
