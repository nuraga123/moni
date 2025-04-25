import React from "react";
import { headers } from "./headers";
import SortArrow from "../SortArrow";

const Header: React.FC = () => {
  return (
    <thead>
      <tr>
        {headers.map((el) =>
          el.isSort === false ? (
            <th key={el.id} className="text-muted">
              <span>{el.name}</span>
            </th>
          ) : (
            <th
              key={el.id}
              className={`${el.name === "Cng" ? "border-left" : ""} text-muted`}
            >
              <SortArrow /> <span>{el.name}</span>
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

export default Header;
