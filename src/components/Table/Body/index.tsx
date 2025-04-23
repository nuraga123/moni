import React from "react";
import TableItem from "./TableItem";
import { Item } from "@/types";

type BodyProps = {
  items: Item[];
};

const Body: React.FC<BodyProps> = ({ items }) => {
  return (
    <tbody>
      {items.map((item) => (
        <TableItem key={item.id} item={item} />
      ))}
    </tbody>
  );
};

export default Body;
