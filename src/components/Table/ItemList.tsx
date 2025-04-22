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
      <div className="h-[51px] min-w-[1280px] grid grid-cols-[182px_100px_100px_100px_100px_120px_120px_120px_100px_100px_80px] text-sm text-white bg-[#111112] border-b border-[#27272a]">
        <div className="text-muted flex items-center h-[51px] w-[158px] ml-[16px] mr-[8px] py-[18px]">
          <span className="mr-[122px]">Token</span>
        </div>
        <div className="px-[15.5px] py-[17.5px] text-muted flex items-center">
          <SortArrow /> Created
        </div>
        <div className="px-4 py-3 text-muted flex items-center">Smarts</div>
        <div className="px-4 py-3 text-muted flex items-center">Mentions</div>
        <div className="px-4 py-3 text-muted flex items-center">TXs</div>
        <div className="px-4 py-3 text-muted flex items-center">Volume</div>
        <div className="px-4 py-3 text-muted flex items-center">Liquidity</div>
        <div className="px-4 py-3 text-muted flex items-center">Market Cap</div>
        <div className="px-4 py-3 text-muted flex items-center">Holders</div>
        <div className="px-4 py-3 text-muted flex items-center">Security</div>
        <div className="px-4 py-3 text-muted flex items-center"></div>
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
