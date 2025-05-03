import React from "react";
import { headers } from "./headers";
import SortArrow from "../../SortArrow";

const CngElement: React.FC = () => (
  <th className="flex items-center mr-2 border-left w-[80px] py-4.5">
    <div className="mr-2 w-[1px] h-[23px] bg-[#27272A]" />
    <SortArrow text="Cng" />
  </th>
);

const Header: React.FC = () => {
  const {
    token,
    created,
    smarts,
    sm,
    txs,
    volume,
    liquidity,
    mktCap,
    holders,
    cvCrHnpLb,
  } = headers;

  return (
    <thead className="flex h-[52px] text-muted">
      <tr className="flex items-center">
        <th className="flex sticky left-0 z-10 mr-2 py-4.5 pl-3.5 pr-30.5 bg-[#111112] overflow-hidden rounded-[8px] w-[174px]">
          <span className="w-[36px]">{token}</span>
        </th>

        <th className="mr-2 py-4.5 px-3 w-[82px]">
          <SortArrow text={created} />
        </th>

        <th className="mr-2 py-4.5 text-left pl-[27px] tracking-[0.2px] w-[80px]">
          <SortArrow text={smarts} />
        </th>

        <CngElement />

        <th className="mr-2 py-4.5 pl-10 w-[80px] tracking-normal">
          <SortArrow text={sm} />
        </th>

        <CngElement />

        <th className="mr-2 py-4.5 pl-[46px]">
          <SortArrow text={txs} />
        </th>

        <CngElement />

        <th className="mr-2 py-4.5 pl-[25px]">
          <SortArrow text={volume} />
        </th>

        <CngElement />

        <th className="mr-2 py-4.5 px-[19px]">
          <SortArrow text={liquidity} />
        </th>

        <th className="mr-2 py-4.5 pl-[15px] tracking-normal">
          <SortArrow text={mktCap} />
        </th>
        <CngElement />

        <th className="mr-2 py-4.5 pl-[23px]">
          <SortArrow text={holders} />
        </th>

        <CngElement />

        <th className="mr-[40px] py-4.5 pl-[15px] tracking-[0.2px] w-[118px] text-left">
          {cvCrHnpLb}
        </th>
      </tr>
    </thead>
  );
};

export default Header;
