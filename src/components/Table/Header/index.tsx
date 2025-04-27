import React from "react";
import { headers } from "./headers";
import SortArrow from "../../SortArrow";

const Header: React.FC = () => {
  return (
    <thead>
      <tr>
        {headers.map((el) =>
          el?.isSort === false ? (
            <th key={el.id} className="">
              <div className="border border-dashed w-[158px] ml-4">
                <span className="text">{el.name}</span>
              </div>
            </th>
          ) : (
            <th
              key={el.id}
              className={`${el.name === "Cng" ? "border-left" : ""} `}
            >
              <SortArrow /> <span className="text">{el.name}</span>
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

export default Header;
