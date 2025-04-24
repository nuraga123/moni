"use client";

import { useState } from "react";
import PolygonDefault from "./PolygonDefault";
import PolygonActive from "./PolygonActive";

const SortArrow = () => {
  const [active, setActive] = useState<"top" | "bottom">("top");

  const toggleActiveBtn = (act: "top" | "bottom") => setActive(act);

  return (
    <button className="flex flex-col items-center my-[2.5px] mr-1 cursor-pointer h-[15px]">
      {active === "top" ? (
        <PolygonActive rotate={true} fill="red" />
      ) : (
        <PolygonDefault
          fill="red"
          rotate={true}
          toggleActiveBtn={() => toggleActiveBtn("top")}
        />
      )}

      {active === "bottom" ? (
        <PolygonActive />
      ) : (
        <PolygonDefault toggleActiveBtn={() => toggleActiveBtn("bottom")} />
      )}
    </button>
  );
};

export default SortArrow;
