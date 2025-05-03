"use client";

import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import TableStore from "@/store";
import Header from "./Header";
import TableList from "./TableList";

const Table = observer(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  useEffect(() => {
    TableStore.getData();
  }, []);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft === 0;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth;

    setShowLeftGradient(!isAtStart);
    setShowRightGradient(!isAtEnd);
  };

  if (TableStore.isLoading) return null;

  return (
    <div className="relative max-w-[1728px] min-w-[1260px] w-full h-[calc(100vh-50px)] border border-[#27272A] rounded-[8px]">
      <div
        className="overflow-x-auto h-full rounded-[8px]"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <table className="border-collapse bg-[#111112]">
          <Header />
          <TableList items={TableStore.data.items} />
        </table>
      </div>

      {showLeftGradient && (
        <div className="absolute left-[172px] top-[1px] w-30 h-[calc(100vh-61px)] bg-gradient-to-r from-[#111112] to-transparent z-999 pointer-events-none" />
      )}

      {showRightGradient && (
        <div className="absolute right-[10px] top-[1px] w-30 h-[calc(100vh-61px)] bg-gradient-to-l from-[#111112] to-transparent z-999 pointer-events-none" />
      )}
    </div>
  );
});

export default Table;
