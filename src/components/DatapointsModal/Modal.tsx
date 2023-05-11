import Image from "next/image";
import { useContext } from "react";
import { AppData } from "~/context/AppData";
import Datapoints from "./Datapoints";

const Modal = () => {
  const { current } = useContext(AppData);
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
            {current && `Recently applied for the ${current.name}? Click here!`}
          </div>
          <div className="mb-5  flex content-center items-center justify-between align-middle">
            <div className="btn-group flex justify-start border-none">
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
              />
            </div>
          </div>
          <div className="divider" />
          <div className="overflow-x-auto">{<Datapoints />}</div>
        </label>
      </label>
    </>
  );
};
export default Modal;
