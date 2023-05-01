const Alert = ({ orientation }: { orientation: string }) => {
  const a = "bottom";
  return (
    <div className={`tooltip-open tooltip tooltip-${a}`} data-tip="hello">
      <button className="btn">Bottom</button>
    </div>
    // <div
    //   className={`
    //   tooltip tooltip-open tooltip-${orientation} ml-2 mr-2

    //   `}
    //   data-tip="Filters currently not applied"
    // >
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     className="h-6 w-6 flex-shrink-0 stroke-info"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //     ></path>
    //   </svg>
    // </div>
  );
};

export default Alert;
