import { useContext } from "react";

import { AppData } from "~/context/AppData";
import Information from "./Information";

interface ModalInfo {
  props: {
    status: string;
  };
}
const Datapoints = ({ props }: ModalInfo) => {
  const { current, datapoints } = useContext(AppData);
  const { status } = props;
  return (
    <table className="table-compact mb-10 table w-full">
      <thead>
        <tr>
          <th />
          <th>Username</th>
          <th>Fico</th>
          <th>Income</th>
          <th>x/3</th>
          <th>x/6</th>
          <th>x/12</th>
          <th>App Date</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {current &&
          datapoints[current.name]
            ?.sort(function (a, b) {
              const x = a.applicationDate.split("/");
              const y = b.applicationDate.split("/");
              if (y[2] && x[2] && y[1] && x[1] && y[0] && x[0]) {
                return +y[2] - +x[2] || +y[1] - +x[1] || +y[0] - +x[0];
              }
              return 1;
            })
            ?.filter((card) => card.finalResult.includes(status))
            .map((card, i) => (
              <tr key={`data points ${i}`} className="hover">
                <th>{i + 1}</th>
                <td>{card.Username}</td>
                {card.creditScore.toString().length > 3 ? (
                  <Information props={card.creditScore.toString()} />
                ) : (
                  <td>{card.creditScore}</td>
                )}
                <td>{card.income}</td>
                <td>{card.x3}</td>
                <td>{card.x6}</td>
                <td>{card.x12}</td>
                <td>{card.applicationDate}</td>
                {card.notes ? <Information props={card.notes} /> : <td />}
              </tr>
            ))}
      </tbody>
      {current && datapoints[current.name] && (
        <tfoot>
          <tr>
            <th />
            <th>Username</th>
            <th>Fico</th>
            <th>Income</th>
            <th>x/3</th>
            <th>x/6</th>
            <th>x/12</th>
            <th>App Date</th>
            <th />
          </tr>
        </tfoot>
      )}
    </table>
  );
};
export default Datapoints;
