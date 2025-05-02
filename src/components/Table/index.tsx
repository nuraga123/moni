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
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    setShowLeftGradient(!isAtStart);
    setShowRightGradient(!isAtEnd);
  };

  if (TableStore.isLoading) return null;

  return (
    <div className="relative h-[922px] border border-[#27272A] rounded-[8px] overflow-hidden">
      {/* Scrollable container */}
      <div
        className="overflow-x-auto h-full pr-4"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <table className="min-w-[1280px] max-w-[1920px] w-full border-collapse  bg-[#111112]">
          <Header />
          <TableList items={TableStore.data.items} />
        </table>
      </div>

      {/* Left gradient */}
      {showLeftGradient && (
        <div className="absolute left-40 top-0 w-30 h-[calc(100vh-74px)] bg-gradient-to-r from-[#111112] to-transparent z-10 pointer-events-none" />
      )}

      {/* Right gradient */}
      {showRightGradient && (
        <div className="absolute right-0 top-0 w-30 h-[calc(100vh-74px)] bg-gradient-to-l from-[#111112] to-transparent z-10 pointer-events-none" />
      )}
    </div>
  );
});

export default Table;
