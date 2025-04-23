import React from "react";
import { headers } from "./headers";

const Header: React.FC = () => {
  return (
    <thead>
      <tr>
        {headers.map((el) => (
          <th key={el.id} className="px-4 py-2 text-muted">
            {el.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default Header;
