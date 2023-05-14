import { useContext, useState } from "react";

import Image from "next/image";

import { AppData } from "~/context/AppData";
import Datapoints from "./Datapoints";

const Modal = () => {
  const { current, setCurrent, datapoints, breadcrumbs } = useContext(AppData);
  const [status, setStatus] = useState("Approved");

  return (
    <>
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        onClick={() => setStatus("Approved")}
      />
      <label
        htmlFor="my-modal-4"
        className="modal flex cursor-pointer flex-col justify-start "
      >
        <label className="modal-box relative mt-8 max-w-7xl">
          <div className="sticky left-0">
            <div className="breadcrumbs hidden pb-0 text-sm md:flex">
              <ul>
                {breadcrumbs.length > 1 &&
                  breadcrumbs.map((card) => (
                    <li key={`breadcrumb-${card.name}`}>
                      <a onClick={() => setCurrent(card)}>{card.name}</a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="my-5 flex content-center items-center justify-between align-middle">
              <div className="btn-group flex justify-start border-none">
                <a
                  className={
                    current && !datapoints[current.name]
                      ? "btn-disabled btn-xs btn md:btn-sm"
                      : status == "Approved"
                      ? "btn-modal btn-active"
                      : "btn-modal"
                  }
                  onClick={() => setStatus("Approved")}
                >
                  Approved
                </a>
                <a
                  className={
                    current && !datapoints[current.name]
                      ? "btn-disabled btn-xs btn md:btn-sm"
                      : status == "Denied"
                      ? "btn-modal btn-active"
                      : "btn-modal"
                  }
                  onClick={() => setStatus("Denied")}
                >
                  Denied
                </a>
              </div>
              <div className="flex items-center">
                <label className="text-xs font-bold md:text-sm md:font-normal">
                  {current && current.name}
                </label>
                <Image
                  className="mask mask-circle hidden w-20 md:flex"
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
            <div className=" flex content-center items-center justify-center">
              <label className="btn-outline btn-success btn-sm btn-circle btn border-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 25"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div>{<Datapoints props={{ status }} />}</div>
        </label>
      </label>
    </>
  );
};
export default Modal;
