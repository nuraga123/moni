import React from "react";
import TableItem from "./TableItem";
import { Item } from "@/types";
import SortArrow from "../SortArrow";

interface ItemsResponse {
  items: Item[];
}

const ItemList: React.FC<ItemsResponse> = ({ items }) => {
  if (!items?.length) return <p>Нет данных</p>;

  return (
    <div className="relative overflow-x-auto bg-[#111112] my-6 mx-4 rounded-xl border border-[#27272a]">
      {/* Градиенты по бокам (по желанию) */}
      {/* <div className="gradient-left" />
      <div className="gradient-right" /> */}

      {/* Заголовки */}
      <div className="h-[52px] min-w-[1280px] grid grid-cols-[182px_100px_100px_100px_100px_120px_120px_120px_100px_100px_80px] text-sm text-white bg-[#111112] border-b border-[#27272a]">
        <div className="py-[18px] pl-4 pr-2 text-muted flex items-end">
          Token
        </div>
        <div className="px-4 py-3 text-muted flex items-end">
          <SortArrow active /> Created
        </div>
        <div className="px-4 py-3 text-muted flex items-end">Smarts</div>
        <div className="px-4 py-3 text-muted flex items-end">Mentions</div>
        <div className="px-4 py-3 text-muted flex items-end">TXs</div>
        <div className="px-4 py-3 text-muted flex items-end">Volume</div>
        <div className="px-4 py-3 text-muted flex items-end">Liquidity</div>
        <div className="px-4 py-3 text-muted flex items-end">Market Cap</div>
        <div className="px-4 py-3 text-muted flex items-end">Holders</div>
        <div className="px-4 py-3 text-muted flex items-end">Security</div>
        <div className="px-4 py-3 text-muted flex items-end"></div>
      </div>

      {/* Тело таблицы */}
      <div className="min-w-[1280px]">
        {items.map((item) => (
          <TableItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
