import React from "react";
import TableItem from "./TableItem";
import { Item } from "@/types";

interface ItemsResponse {
  items: Item[];
}

const ItemList: React.FC<ItemsResponse> = ({ items }) => {
  if (!items?.length) return <p>Нет данных</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-black text-white text-sm">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2 text-left">Token</th>
            <th className="px-4 py-2 text-left">Created</th>
            <th className="px-4 py-2 text-left">Smarts +</th>
            <th className="px-4 py-2 text-left">Mentions</th>
            <th className="px-4 py-2 text-left">TXs</th>
            <th className="px-4 py-2 text-left">Volume</th>
            <th className="px-4 py-2 text-left">Liquidity</th>
            <th className="px-4 py-2 text-left">Market Cap</th>
            <th className="px-4 py-2 text-left">Holders</th>
            <th className="px-4 py-2 text-left">Security</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
