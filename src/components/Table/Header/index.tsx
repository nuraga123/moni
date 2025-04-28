import React from "react";
import { headers } from "./headers";
import SortArrow from "../../SortArrow";

const Header: React.FC = () => {
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

  return (
    <thead className="text-[#a1a1aa]">
      <tr className="flex h-[52px] py-[17px]">
        <th className="text-muted flex ml-4 mr-2 pr-[122px] w-[158px] border border-dashed">
          {headers[0].name}
        </th>

        <th className="text-muted flex mr-2 px-3 w-[82px] border border-dashed">
          <SortArrow />
          {headers[1].name}
        </th>

        <th className="text-muted flex mr-2 pl-[27px] w-[80px] border border-dashed">
          <SortArrow />
          {headers[2].name}
        </th>

        <CngElement />

        <th className="text-muted flex mr-2 pl-[40px] w-[80px] border border-dashed">
          <SortArrow />
          {headers[3].name}
        </th>

        <CngElement />

        <th className="text-muted flex mr-2 pl-[46px] w-[80px] border border-dashed">
          <SortArrow />
          {headers[4].name}
        </th>

        <CngElement />

        <th className="text-muted flex mr-2 pl-[25px] w-[80px] border border-dashed">
          <SortArrow />
          {headers[5].name}
        </th>

        <CngElement />

        <th className="text-muted flex mr-2 px-[19px] w-[96px] border border-dashed">
          <SortArrow />
          {headers[6].name}
        </th>

        <th className="text-muted flex mr-2 pl-[15px] w-[80px] border border-dashed">
          <SortArrow />
          {headers[7].name}
        </th>
        <CngElement />

        <th className="text-muted flex mr-2 pl-[23px] w-[80px] border border-dashed">
          <SortArrow />
          {headers[8].name}
        </th>

        <CngElement />

        <th className="text-muted flex mr-[40px] px-[15px] w-[118px] border border-dashed">
          {headers[9].name}
        </th>

        <th className="text-muted flex mr-2 pl-[23px] w-[106px] border border-dashed" />
      </tr>
    </thead>
  );
};

export default Header;
