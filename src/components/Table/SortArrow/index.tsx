"use client";

import { useState } from "react";
import PolygonDefault from "./PolygonDefault";
import PolygonActive from "./PolygonActive";

const SortArrow = () => {
  const [activeAsc, setActiveAsc] = useState(false);
  const toggleActiveBtn = () => setActiveAsc(!activeAsc);

  return (
    <button
      className="flex flex-col items-center my-[2.5px] mr-1 cursor-pointer h-[13px]"
      onClick={toggleActiveBtn}
    >
      {activeAsc ? (
        <div className="rotate-180 mb-[1px]">
          <PolygonActive fill="red" />
        </div>
      ) : (
        <div className="rotate-180 mb-[1px]">
          <PolygonDefault fill="red" />
        </div>
      )}

      {!activeAsc ? <PolygonActive /> : <PolygonDefault />}
    </button>
  );
};

export default SortArrow;
