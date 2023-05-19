import { useContext } from "react";
import { AppData } from "~/context/AppData";
import Image from "next/image";
import type { CardData } from "~/interface";

const List = () => {
  const { display, datapoints, setCurrent, breadcrumbs, setBreadcrumbs } =
    useContext(AppData);

  const handleClick = (props: CardData) => {
    setCurrent(props);
    if (breadcrumbs.some((card) => card.name == props.name)) return;
    breadcrumbs.length > 2
      ? setBreadcrumbs([...breadcrumbs.slice(1), props])
      : setBreadcrumbs([...breadcrumbs, props]);
  };

  return (
    <div className="w-full ">
      <table className="table w-full overflow-x-auto">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-center">Card</th>
            <th>Network</th>
            <th>Annual Fee</th>
            <th>Datapoints</th>
            <th className="text-center">Link</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {display.map((card) => (
            <tr
              key={`list-view,${card.name}`}
              className="hover"
              onClick={() => handleClick(card)}
            >
              <th>
                <label
                  htmlFor="my-modal-4"
                  className="flex cursor-pointer items-center space-x-3"
                >
                  <div className="avatar">
                    <div className=" mask mask-squircle h-12 w-20 ">
                      <Image
                        src={"https://www.offeroptimist.com/" + card.imageUrl}
                        alt={card.name}
                        width={65}
                        height={65}
                        unoptimized
                      />
                    </div>
                  </div>
                </label>
              </th>
              <td>
                <div>
                  <div className="text-xs font-bold">{card.name}</div>
                  <div className="text-sm opacity-50">{card.issuer}</div>
                </div>
              </td>
              <td>
                {card.currency}
                <br />
                <span className="badge-ghost badge badge-sm ">
                  {card.network}
                </span>
              </td>
              <td className="text-center">
                {card.annualFee != 0 && card.annualFee}
              </td>
              <td className="text-center">{datapoints[card.name]?.length}</td>
              <td className="text-center">
                <a
                  href={card.url}
                  target="_blank"
                  className="btn-ghost btn-xs btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </a>
              </td>
              <th />
            </tr>
          ))}
        </tbody>
        {/* foot */}
        {display.length != 0 && (
          <tfoot>
            <tr>
              <th>Card</th>
              <th>Network</th>
              <th>Annual Fee</th>
              <th>Datapoints</th>
              <th>Link</th>
              <th></th>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};
export default List;
