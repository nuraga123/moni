"use client";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";
import { Item } from "@/types";
import { formatLogoUrl } from "@/utils/formatLogoUrl";
import { SosialIcons } from "@/components/SosialIcons";
import { getTimeAgo } from "@/utils/getTimeAgo";

const TableItem: React.FC<{ item: Item }> = ({ item }) => {
  const ProgressPercent = ({
    buyCount,
    sellCount,
  }: {
    buyCount: number;
    sellCount: number;
  }) => {
    const total = buyCount + sellCount;

    const buyPercentage = total > 0 ? (buyCount / total) * 100 : 0;
    const sellPercentage = total > 0 ? (sellCount / total) * 100 : 0;

    return (
      <div className="max-w-[56px] w-full h-1 mt-2 mb-1 flex rounded-full overflow-hidden">
        <div
          className="h-1 bg-[#83E073] rounded-l-full max-w-[56px]"
          style={{ width: `${buyPercentage}%` }}
        />

        <div
          className="h-1 bg-[#FF5F5F] rounded-r-full max-w-[56px]"
          style={{ width: `${sellPercentage}%` }}
        />
      </div>
    );
  };

  const [loading, setLoading] = useState<boolean>(false);

  if (!item) return null;

  const logoUrl: string = formatLogoUrl(item.logoUrl);

  return (
    <tr className="pt-[0px] flex border-t border-[#27272A] h-[64px] relative transition-colors duration-200 group hover:bg-[#1F1F22]">
      {/* token */}
      <td className="flex items-center pl-4 pb-[18px] w-[158px] sticky left-0 z-999 bg-[#111112] group-hover:bg-[#1F1F22] transition-colors duration-200">
        {loading && (
          <div className="absolute inset-0 bg-[#111112] z-10 group-hover:bg-[#1F1F22] transition-colors duration-200 ">
            <FaSpinner className="animate-spin text-gray-500 w-6 h-6" />
          </div>
        )}

        <Image
          src={logoUrl}
          alt={""}
          className="rounded-full my-1 mr-[10px] group-hover:bg-[#1F1F22] transition-colors duration-200 max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]"
          width={24}
          height={24}
          loading="lazy"
          unoptimized
          onLoad={(e) => {
            console.log(e);
            setLoading(false);
          }}
        />
        <div className="group-hover:bg-[#1F1F22] transition-colors duration-200">
          <div
            id="name"
            className="text-sm font-semibold max-w-[100px] overflow-hidden whitespace-nowrap"
          >
            {item.name.length > 12 ? item.name.slice(0, 9) + "..." : item.name}
          </div>
          <div className="flex items-center bg-[#111112] group-hover:bg-[#1F1F22] transition-colors duration-200">
            <div className="text-xs text-gray-500 mr-1">
              {item.address.slice(0, 3)}...{item.address.slice(-3)}
            </div>
            <SosialIcons links={item.links} />
          </div>
        </div>
      </td>

      {/* createdAt */}
      <td className="flex items-center justify-center text-xs mr-2 text-center pb-[34px] w-[82px] z-0">
        <div className="flex items-center">
          <Image
            src="/icons/clock.svg"
            alt="clock"
            width={12}
            height={12}
            className="mr-1 w-[12px] h-[12px]"
          />
          {getTimeAgo(item.createdAt)}
        </div>
      </td>

      {/* smarts smartFollowersCount */}
      <td className="flex items-center justify-end mr-2 pb-[34px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {item.smartFollowersCount}
      </td>

      {/* Cng smartMentionsCountChange */}
      <td className="flex items-center justify-start text-[#83E073] text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {`+${item.smartMentionsCountChange}`}
      </td>

      {/* S.M  smartMentionsCount*/}
      <td className="flex items-center justify-end mr-2 pb-[34px] w-[81px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {item.smartMentionsCount}
      </td>

      {/* Cng smartMentionsCountChange */}
      <td className="flex items-center justify-start text-[#83E073] text-xs mr-2 pb-[34px] pl-[8px] w-[80px] text-[14px] font-medium leading-[14px] tracking-[0]">
        {`+${item.smartMentionsCountChange}`}
      </td>

      {/* TXs txsBuyCount + txsSellCount*/}
      <td className="flex flex-col items-end mr-2 pb-[18px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {+item.txsBuyCount + +item.txsSellCount}
        <ProgressPercent
          buyCount={+item.txsBuyCount + 1}
          sellCount={+item.txsSellCount}
        />
      </td>

      {/* Cng txsCountChange*/}
      <td className="flex items-center justify-start text-[#83E073] text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {item.txsCountChange}
      </td>

      {/* Volume volumeBuy + volumeSell */}
      <td className="flex flex-col items-end mr-2 pb-[18px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {+item.volumeBuy.USD + +item.volumeSell.USD}
        <ProgressPercent
          buyCount={+item.volumeBuy.USD + 1}
          sellCount={+item.volumeSell.USD}
        />
      </td>

      {/* Cng volumeChange */}
      <td className="flex items-center justify-start text-[#83E073] text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {+item.volumeChange.USD}
      </td>

      {/* Liqudity */}
      <td className="flex items-center justify-end mr-2 pb-[34px] w-[96px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {`$${+item.liquidity.USD}`}
      </td>

      {/* MKT Cap marketCap */}
      <td className="flex items-center justify-end mr-2 pb-[34px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {`$${+item.marketCap.USD}`}
      </td>

      {/* Cng marketCapChange */}
      <td className="flex items-center justify-start text-[#83E073] text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {item.marketCapChange.USD}
      </td>

      {/* Holders */}
      <td className="flex items-center justify-end mr-2 pb-[34px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {item.holdersCount}
      </td>

      {/* Cng holdersCountChange */}
      <td className="flex items-center justify-start text-[#83E073] text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {item.holdersCountChange}
      </td>

      {/* Security */}
      <td className="flex items-start gap-2 text-xs mr-10 px-[12px] w-[118px]">
        {item.security.length > 0 &&
          item.security.map((sec, index) => (
            <span
              key={index}
              title={sec.name}
              className={sec.status ? "text-green-500" : "text-red-500"}
            >
              {sec.status ? (
                <Image
                  src="/icons/Status_safety.svg"
                  alt="Status_safety"
                  width={24}
                  height={20}
                />
              ) : (
                <Image
                  src="/icons/Status_safety_X.svg"
                  alt="Status_safety_X"
                  width={24}
                  height={20}
                />
              )}
            </span>
          ))}
      </td>

      {/* buy button */}
      <td className="flex items-center w-[106px] justify-center font-medium text-[14px] leading-[14px] tracking-[0]">
        <button className="cursor-pointer flex items-center bg-[#464443] hover:bg-indigo-700 ml-2 mr-4 px-4 py-2 text-white text-sm rounded w-[82px] h-[32px]">
          <Image
            className="mr-2 my-[2px] "
            src="/icons/zap.svg"
            alt="zap"
            width={16}
            height={16}
            priority
          />
          Buy
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
