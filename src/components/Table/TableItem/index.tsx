"use client";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";
import { Item } from "@/types";
import { formatLogoUrl } from "@/utils/formatLogoUrl";
import { SosialIcons } from "@/components/SosialIcons";
import { getTimeAgo } from "@/utils/getTimeAgo";

const TableItem: React.FC<{ item: Item }> = ({ item }) => {
  const ProgressPercent: React.FC<{ buyCount: number; sellCount: number }> = ({
    buyCount,
    sellCount,
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

  const NumRecord: React.FC<{ num: number }> = ({ num }) => {
    if (num > 0) {
      return <div className="text-[#83E073]">{num}</div>;
    } else if (num < 0) {
      return <div className="text-[#FF5F5F]">{num}</div>;
    } else {
      return <div>{num}</div>;
    }
  };

  const BorderLeft: React.FC = () => (
    <div className="relative left-[-8px] w-[1px] h-[32px] bg-[#1C1C1E]" />
  );

  const [loading, setLoading] = useState<boolean>(false);

  if (!item) return null;

  const logoUrl: string = formatLogoUrl(item.logoUrl);

  return (
    <tr className="flex h-[64px] border border-[#27272A] transition-colors duration-200 group hover:bg-[#1F1F22]">
      {/* token */}
      <td className="flex mr-2 pl-4 pr-6 pt-3.5 pb-4.5 sticky left-0 z-999 bg-[#111112] group-hover:bg-[#1F1F22] transition-colors duration-200">
        {loading && (
          <div className="absolute inset-0 bg-[#111112] z-10 group-hover:bg-[#1F1F22] transition-colors duration-200 ">
            <FaSpinner className="animate-spin text-gray-500 w-6 h-6" />
          </div>
        )}

        <Image
          src={logoUrl}
          alt={"logoUrl"}
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
        <div className="group-hover:bg-[#1F1F22] transition-colors duration-200 pb-1">
          <div
            id="name"
            className="text-[14px] leading-[14px] max-w-[100px] overflow-hidden whitespace-nowrap"
          >
            {item.name.length > 12
              ? item.name.slice(0, 9).toUpperCase() + "..."
              : item.name.toUpperCase()}
          </div>
          <div className="flex items-center bg-[#111112] group-hover:bg-[#1F1F22] transition-colors duration-200 w-[100px]">
            <div className="text-xs text-gray-500 mr-1">
              {item.address.slice(0, 3)}...{item.address.slice(-3)}
            </div>
            <SosialIcons links={item.links} />
          </div>
        </div>
      </td>

      {/* createdAt */}
      <td className="flex w-[82px] mr-2 pt-3.5 pb-8.5 px-5 text-item">
        <div className="flex items-center h-[16px]">
          <Image
            src="/icons/clock.svg"
            alt="clock"
            width={12}
            height={12}
            className="mr-1 mt-[3px] mb-[2px] w-[12px] h-[12px]"
          />
          {getTimeAgo(item.createdAt)}
        </div>
      </td>

      {/* smarts smartFollowersCount */}
      <td className="text-right mr-2 pt-3.5 pb-[34px] w-[80px] text-[14px] leading-[14px] tracking-[0]">
        <span className="mt-[2px] mr-[3px]">
          <NumRecord num={item.smartFollowersCount} />
        </span>
      </td>

      {/* Cng smartMentionsCountChange */}
      <td className="flex pt-3.5 text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        <BorderLeft />
        <NumRecord num={+(+item.smartFollowersCountChange).toFixed(2)} />
      </td>

      {/* S.M  smartMentionsCount*/}
      <td className="flex pt-3.5 w-[80px] items-center justify-end mr-2 pb-[34px] font-medium text-[14px] leading-[14px] tracking-[0]">
        <NumRecord num={item.smartMentionsCount} />
      </td>

      {/* Cng smartMentionsCountChange */}
      <td className="flex pt-3.5 items-center justify-start text-xs mr-2 pb-[34px] pl-[8px] w-[80px] text-[14px] font-medium leading-[14px] tracking-[0]">
        <BorderLeft />
        <NumRecord num={item.smartMentionsCountChange} />
      </td>

      {/* TXs txsBuyCount + txsSellCount*/}
      <td className="flex flex-col pt-3.5 items-end mr-2 pb-[18px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        ${+item.txsBuyCount + +item.txsSellCount}
        <ProgressPercent
          buyCount={+item.txsBuyCount}
          sellCount={+item.txsSellCount}
        />
      </td>

      {/* Cng txsCountChange*/}
      <td className="flex pt-3.5 items-center justify-start text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        <BorderLeft />
        <NumRecord num={+(+item.txsCountChange).toFixed(2)} />
      </td>

      {/* Volume volumeBuy + volumeSell */}
      <td className="flex flex-col pt-3.5 items-end mr-2 pb-[18px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        ${Number(+item.volumeBuy.USD + +item.volumeSell.USD).toFixed(2)}
        <ProgressPercent
          buyCount={+(+item.volumeBuy.USD).toFixed(2)}
          sellCount={+(+item.volumeSell.USD).toFixed(2)}
        />
      </td>

      {/* Cng volumeChange */}
      <td className="flex pt-3.5 items-center justify-start text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        <BorderLeft />
        <NumRecord num={+(+item.volumeChange.USD).toFixed(2)} />
      </td>

      {/* Liqudity */}
      <td className="flex pt-3.5 items-center justify-end mr-2 pb-[34px] w-[96px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {`$${+(+item.liquidity.USD).toFixed(2)}`}
      </td>

      {/* MKT Cap marketCap */}
      <td className="flex pt-3.5 items-center justify-end mr-2 pb-[34px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {`$${+(+item.marketCap.USD).toFixed(2)}`}
      </td>

      {/* Cng marketCapChange */}
      <td className="flex pt-3.5 items-center justify-start text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        <BorderLeft />
        <NumRecord num={+(+item.marketCapChange.USD).toFixed(2)} />
      </td>

      {/* Holders */}
      <td className="flex pt-3.5 items-center justify-end mr-2 pb-[34px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        {item.holdersCount}
      </td>

      {/* Cng holdersCountChange */}
      <td className="flex pt-3.5 items-center justify-start text-xs mr-2 pb-[34px] pl-[8px] w-[80px] font-medium text-[14px] leading-[14px] tracking-[0]">
        <BorderLeft />
        <NumRecord num={+(+item.holdersCountChange).toFixed(2)} />
      </td>

      {/* Security */}
      <td className="flex pt-3.5 items-start gap-2 text-xs mr-10 px-[12px] w-[118px]">
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
      <td className="my-3.5 ml-2 mr-4">
        <button className="w-[82px] h-[32px] bg-[#27272A] rounded-[8px] flex pl-2 pr-4 items-center justify-center cursor-pointer shadow-[0px_1px_2px_0px_#0000000D]">
          <div className="flex py-2">
            <Image
              className="mr-2"
              src="/icons/zap.svg"
              alt="zap"
              width={16}
              height={16}
              priority
            />
            <span className="text-[14px] leading-[14px]">Buy</span>
          </div>
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
