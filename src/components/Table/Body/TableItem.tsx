"use client";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";
import { Item } from "@/types";
import { formatLogoUrl } from "@/utils/formatLogoUrl";

const TableItem: React.FC<{ item: Item }> = ({ item }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const logoUrl: string = formatLogoUrl(item?.logoUrl);

  return (
    <tr className="border-b border-gray-800 hover:bg-gray-900 transition">
      <td className="px-4 py-2 flex items-center gap-2">
        {loading && (
          <div className="absolute z-10 flex items-center justify-center">
            <FaSpinner className="animate-spin text-gray-500 w-6 h-6 ml-auto mr-auto" />
          </div>
        )}

        <Image
          src={logoUrl}
          alt={item.name}
          className="w-6 h-6 rounded-full"
          width={24}
          height={24}
          loading="lazy"
          unoptimized
          onLoad={() => setLoading(false)}
        />

        <div>
          <div className="text-sm font-semibold">{item.symbol}</div>
          <div className="text-xs text-gray-500">
            {item.address.slice(0, 6)}...{item.address.slice(-4)}
          </div>
        </div>
      </td>
      <td className="px-4 py-2 text-xs">{item.createdAt}s</td>
      <td className="px-4 py-2 text-green-500">
        +{item.smartFollowersCountChange}
      </td>
      <td className="px-4 py-2 text-red-500">
        {item.smartMentionsCountChange}
      </td>
      <td className="px-4 py-2">{item.txsBuyCount}</td>
      <td className="px-4 py-2">{item.volumeBuy.USD}</td>
      <td className="px-4 py-2">{item.liquidity.USD}</td>
      <td className="px-4 py-2">{item.marketCap.USD}</td>
      <td className="px-4 py-2">{item.holdersCount}</td>
      <td className="px-4 py-2">
        {item.security.length &&
          item.security.map((sec, index) => (
            <span
              key={index}
              className={sec.status ? "text-green-500" : "text-red-500"}
            >
              {sec.shortName}
            </span>
          ))}
      </td>
      <td className="px-4 py-2">
        <button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 text-white text-sm rounded">
          Buy
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
