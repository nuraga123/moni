"use client";

import { useState } from "react";
import PolygonDefault from "./PolygonDefault";
import PolygonActive from "./PolygonActive";

type TSortState = "top" | "bottom" | "default";

const SortArrow = ({ text = "" }: { text: string }) => {
  const [active, setActive] = useState<TSortState>("default");

  const toggleActiveBtn = () => {
    if (active === "default") setActive("top");
    if (active === "top") setActive("bottom");
    if (active === "bottom") setActive("default");
  };

  return (
    <div className="flex cursor-pointer">
      <button className="flex flex-col items-center my-[2.5px] mr-1 h-[11px]">
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
      {active !== "default" ? (
        <span className="text-[#fafafa]" onClick={toggleActiveBtn}>
          {text}
        </span>
      ) : (
        <span onClick={toggleActiveBtn}>{text}</span>
      )}
    </div>
  );
};

export default SortArrow;
