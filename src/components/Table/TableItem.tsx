"use client";

import Image from "next/image";
import { Item } from "@/types";

const TableItem: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className="border-b border-gray-800 hover:bg-gray-900 transition">
      <div className="px-4 py-2 flex items-center gap-2">
        <Image
          src={item.chain.logoUrl}
          alt={item.name}
          className="w-6 h-6 rounded-full"
          width={24}
          height={24}
          priority
        />
        <div>
          <div className="text-sm font-semibold">{item.symbol}</div>
          <div className="text-xs text-gray-500">
            {item.address.slice(0, 6)}...{item.address.slice(-4)}
          </div>
        </div>
      </div>
      <div className="px-4 py-2 text-xs">{item.createdAt}s</div>
      <div className="px-4 py-2 text-green-500">
        +{item.smartFollowersCountChange}
      </div>
      <div className="px-4 py-2 text-red-500">
        {item.smartMentionsCountChange}
      </div>
      <div className="px-4 py-2">{item.txsBuyCount}</div>
      <div className="px-4 py-2">{item.volumeBuy.USD}</div>
      <div className="px-4 py-2">{item.liquidity.USD}</div>
      <div className="px-4 py-2">{item.marketCap.USD}</div>
      <div className="px-4 py-2">{item.holdersCount}</div>
      <div className="px-4 py-2">
        {item.security.length &&
          item.security.map((sec, index) => (
            <span
              key={index}
              className={sec.status ? "text-green-500" : "text-red-500"}
            >
              {sec.shortName}
            </span>
          ))}
      </div>
      <div className="px-4 py-2">
        <button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 text-white text-sm rounded">
          Buy
        </button>
      </div>
    </div>
  );
};

export default TableItem;
