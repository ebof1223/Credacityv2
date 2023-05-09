import Image from "next/image";
import { useContext } from "react";
import { AppData } from "~/context/AppData";

const DatapointsModal = () => {
  const { current } = useContext(AppData);
  // console.log("based on current card state", current);
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label
        htmlFor="my-modal-4"
        className="modal flex cursor-pointer flex-col justify-start"
      >
        <label className="modal-box relative mt-8 max-w-7xl">
          <div className="breadcrumbs hidden pb-0 text-sm md:flex">
            <ul>
              <li>
                <a>Business Platinum</a>
              </li>
              <li>
                <a>Business Gold</a>
              </li>
              <li>{current && current.name}</li>
            </ul>
          </div>
          {/* NUMBER of users NEEDS TO BE DYNAMIC */}
          <div className="flex justify-end pb-4 text-xs md:mr-2 md:pb-7">
            27 users have contributed
          </div>
          <div className="mb-5  flex content-center items-center justify-between align-middle">
            <div className="btn-group flex justify-start border-none">
              <button className="btn-xs btn md:btn-sm">All</button>
              <button className="btn-active btn-xs btn md:btn-sm">
                Approved
              </button>
              <button className="btn-xs btn md:btn-sm">Denied</button>
            </div>
            <div className="flex items-center">
              <label className="text-xs font-bold md:text-sm md:font-normal">
                {current && current.name}
              </label>
              <Image
                className="mask mask-circle hidden md:flex"
                src={
                  current
                    ? "https://www.offeroptimist.com/" + current.imageUrl
                    : ""
                }
                alt={current ? current.name : ""}
                width={65}
                height={65}
                unoptimized
                priority
              />
            </div>
          </div>
          <div className="divider" />
          <div className="overflow-x-auto">
            <table className="table-compact table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Username</th>
                  <th>Fico</th>
                  <th>Income</th>
                  <th>x/3</th>
                  <th>x/6</th>
                  <th>x/12</th>
                  <th>Submitted</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>cryingatthegecshow</td>
                  <td>757</td>
                  <td>$87,000</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>12/16/2020</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>yourmomsatan</td>
                  <td>666</td>
                  <td>$17,000</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>11/09/2022</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>steffburns</td>
                  <td>812</td>
                  <td>$111,000</td>
                  <td>2</td>
                  <td>0</td>
                  <td>0</td>
                  <td>04/01/2019</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>samisamisun</td>
                  <td>711</td>
                  <td>$121,000</td>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>07/17/2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </label>
      </label>
    </>
  );
};
export default DatapointsModal;
