"use client";

import { useState } from "react";
import PolygonDefault from "./PolygonDefault";
import PolygonActive from "./PolygonActive";

type TSortState = "top" | "bottom" | "default";

const SortArrow = () => {
  const [active, setActive] = useState<TSortState>("default");

  return (
    <button className="flex flex-col items-center my-[2.5px] mr-1 cursor-pointer h-[11px]">
      {active === "top" ? (
        <PolygonActive
          rotate={true}
          toggleActiveBtn={() => setActive("default")}
        />
      ) : (
        <PolygonDefault
          rotate={true}
          toggleActiveBtn={() => setActive("top")}
        />
      )}

      {active === "bottom" ? (
        <PolygonActive toggleActiveBtn={() => setActive("default")} />
      ) : (
        <PolygonDefault toggleActiveBtn={() => setActive("bottom")} />
      )}
    </button>
  );
};

export default SortArrow;
