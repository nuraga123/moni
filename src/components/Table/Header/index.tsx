import React from "react";
import { headers } from "./headers";
import SortArrow from "../../SortArrow";

const BorderLeftArrow = () => (
  <div className="relative pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-[23px] before:bg-[#27272A]" />
);

const CngElement = () => (
  <th className="text-muted flex mr-2 border-left w-[80px]">
    <BorderLeftArrow />
    <SortArrow />
    <p className="flex w-[58px] h-[16px]">Cng</p>
  </th>
);

const Header: React.FC = () => (
  <thead className="text-[#a1a1aa] flex">
    <tr className="flex py-[18px] h-[50px] ">
      <th className={`
        flex sticky left-0 z-20 w-fit pl-[16px] pr-[122px] bg-[#111112] 
        before:absolute 
        before:top-0 before:right-0 before:bottom-[-1px] 
        before:w-[30px] 
        before:translate-x-full 
        before:transition-shadow 
        before:content-[''] 
        before:pointer-events-none 
        before:box-shadow-[inset_10px_0_8px_-8px_#00000026]`}>
        <div className="text-muted h-[16px]">{headers[0].name}</div>
      </th>

      <th className="flex mr-2 px-3 w-[82px] z-0">
        <SortArrow />
        <div className="text-muted h-[16px]">{headers[1].name}</div>
      </th>

      <th className="border border-dashed text-muted flex mr-2 pl-[27px] w-[80px] z-0">
        <SortArrow />
        <div className="text-muted h-[16px]">{headers[2].name}</div>
      </th>

      <CngElement />

      <th className="text-muted flex mr-2 pl-[40px] w-[80px] z-0">
        <SortArrow />
        {headers[3].name}
      </th>

      <CngElement />

      <th className="text-muted flex mr-2 pl-[46px] w-[80px] z-0">
        <SortArrow />
        {headers[4].name}
      </th>

      <CngElement />

      <th className="text-muted flex mr-2 pl-[25px] w-[80px] z-0">
        <SortArrow />
        {headers[5].name}
      </th>

      <CngElement />

      <th className="text-muted flex mr-2 px-[19px] w-[96px] z-0">
        <SortArrow />
        {headers[6].name}
      </th>

      <th className="text-muted flex mr-2 pl-[15px] w-[80px] z-0">
        <SortArrow />
        {headers[7].name}
      </th>
      <CngElement />

      <th className="text-muted flex mr-2 pl-[23px] w-[80px] z-0">
        <SortArrow />
        {headers[8].name}
      </th>

      <CngElement />

      <th className="text-muted flex mr-[40px] px-[15px] w-[118px] z-0">
        {headers[9].name}
      </th>

      <th className="w-[106px] z-0" />
    </tr>
  </thead>
);

export default Header;
