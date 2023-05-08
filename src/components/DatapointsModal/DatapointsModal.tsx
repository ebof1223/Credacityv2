import Image from "next/image";
import { useContext } from "react";
import { AppData } from "~/context/AppData";

const DatapointsModal = () => {
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
                <a>Home</a>
              </li>
              <li>
                <a>Documents</a>
              </li>
              <li>{current && current.name}</li>
            </ul>
          </div>
          {/* NUMBER of users NEEDS TO BE DYNAMIC */}
          <div className="mr-2 flex justify-end pb-5 text-xs">
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
              <label className="text-xs md:text-sm">
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
          <div className="divider"></div>
        </label>
      </label>
    </>
  );
};
export default DatapointsModal;
