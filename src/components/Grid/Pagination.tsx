import React, { useContext, useEffect } from "react";
import { AppData } from "~/context/AppData";

const Pagination = () => {
  const { display, page, setPage, setPageDisplay } = useContext(AppData);
  useEffect(() => {
    setPageDisplay(display.slice(12 * (page - 1), 12 * page));
  }, [page]);

  return (
    <div className="btn-group mx-auto my-10 border-none">
      {Array.from(Array(Math.ceil(display.length / 12))).map((x, i) => (
        <button
          className={page === i + 1 ? "btn-active btn" : "btn"}
          key={`page${i + 1}`}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
