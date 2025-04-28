"use client";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";
import { Item } from "@/types";
import { formatLogoUrl } from "@/utils/formatLogoUrl";
import { SosialIcons } from "@/components/SosialIcons";
import { getTimeAgo } from "@/utils/getTimeAgo";

const TableItem: React.FC<{ item: Item }> = ({ item }) => {
  const [loading, setLoading] = useState<boolean>(true);

  if (!item) return null;

  const logoUrl: string = formatLogoUrl(item.logoUrl);

  return (
    <tr className="flex border-t border-[#27272A] hover:bg-[#1F1F22] transition-colors duration-200 h-[64px] pt-[14px]">
      {/* token */}
      <td className="flex items-center ml-4 mr-2  pb-[18px] pr-6  w-[158px] relative border border-dashed">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
            <FaSpinner className="animate-spin text-gray-500 w-6 h-6" />
          </div>
        )}
        <Image
          src={logoUrl}
          alt={item.name}
          className="rounded-full my-1 mr-[10px]"
          width={24}
          height={24}
          loading="lazy"
          unoptimized
          onLoad={() => setLoading(false)}
        />
        <div>
          <div className="text-sm font-semibold">{item.symbol}</div>
          <div className="flex items-center">
            <div className="text-xs text-gray-500 mr-1">
              {item.address.slice(0, 3)}...{item.address.slice(-3)}
            </div>
            <SosialIcons links={item.links} />
          </div>
        </div>
      </td>

      {/* createdAt */}
      <td className="flex items-center justify-center text-xs mr-2 text-center pb-[34px] w-[82px] border border-dashed">
        <div className="flex items-center text-[14px]">
          <Image
            src="/icons/clock.svg"
            alt="clock"
            width={12}
            height={12}
            className="mr-1 "
          />
          {getTimeAgo(item.createdAt)}
        </div>
      </td>

      {/* smarts smartFollowersCount */}
      <td className="flex items-center justify-end mr-2 pb-[34px] w-[80px] border border-dashed ">
        {item.smartFollowersCount}
      </td>

      {/* Cng smartMentionsCountChange */}
      <td className="flex items-center justify-start text-[#83E073] text-xs mr-2 pb-[34px] w-[80px] border border-dashed text-[14px]">
        {`+${item.smartMentionsCountChange}`}
      </td>

      {/* S.M  smartMentionsCount*/}
      <td className="flex items-center justify-end mr-2 pb-[34px] w-[80px] border border-dashed ">
        {item.smartMentionsCount}
      </td>

      {/* Cng smartMentionsCountChange */}
      <td className="flex items-center justify-start text-[#83E073] text-xs mr-2 pb-[34px] w-[80px] border border-dashed text-[14px]">
        {`+${item.smartMentionsCountChange}`}
      </td>

      {/* TXs txsBuyCount + txsSellCount*/}
      <td className="flex items-center text-xs mr-2 pl-[46px] w-[80px]">
        {`$${+item.txsBuyCount + +item.txsSellCount}`}
      </td>

      {/* Cng txsCountChange*/}
      <td className="flex items-center text-xs text-green-500 mr-2 pl-2 w-[80px]">
        {item.txsCountChange}
      </td>

      {/* Volume volumeBuy + volumeSell */}
      <td className="flex items-center text-xs mr-2 px-[19px] w-[96px]">
        {item.volumeBuy.USD + item.volumeSell.USD}
      </td>

      {/* Cng volumeChange */}
      <td className="flex items-center text-xs text-green-500 mr-2 pl-2 w-[80px]">
        {item.volumeChange.USD}
      </td>

      {/* Liqudity */}
      <td className="flex items-center text-xs mr-2 pl-[46px] w-[80px]">
        {`$${+item.liquidity}`}
      </td>

      {/* MKT Cap marketCap */}
      <td className="flex items-center text-xs mr-2 pl-[46px] w-[80px]">
        {`$${+item.marketCap}`}
      </td>

      {/* Cng marketCapChange */}
      <td className="flex items-center text-xs text-green-500 mr-2 pl-2 w-[80px]">
        {item.marketCapChange.USD}
      </td>

      {/* Holders */}
      <td className="flex items-center text-xs mr-2 pl-[46px] w-[80px]">
        {item.holdersCount}
      </td>

      {/* Cng holdersCountChange */}
      <td className="flex items-center text-xs text-green-500 mr-2 pl-2 w-[80px]">
        {item.holdersCountChange}
      </td>

      {/* Security */}
      <td className="flex items-center text-xs mr-2 pl-[46px] w-[80px]">
        {item.security.length > 0 &&
          item.security.map((sec, index) => (
            <span
              key={index}
              className={sec.status ? "text-green-500" : "text-red-500"}
            >
              {sec.shortName}
            </span>
          ))}
      </td>

      {/* buy button */}
      <td className="flex items-center mr-2 pl-[23px] w-[106px] justify-center">
        <Image
          src="/icons/zap.svg"
          alt="zap"
          width={16}
          height={16}
          className="ml-4 mr-2 my-[10px] "
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 text-white text-sm rounded">
          Buy
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
