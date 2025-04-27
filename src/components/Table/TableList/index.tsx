import React from "react";
import TableItem from "../TableItem";
import { Item } from "@/types";

const TableList: React.FC<{items: Item[]}> = ({ items }) => (
    <tbody>
      {items.map((item) => (
        <TableItem key={item.id} item={item} />
      ))}
    </tbody>
  );

export default TableList;
