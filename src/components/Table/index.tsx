"use client";

import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import TableStore from "@/store";
import Header from "./Header";
import TableList from "./TableList";
// import Loading from "../Loading";

const Table = observer(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  useEffect(() => {
    TableStore.getData();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setShowLeftGradient(scrollLeft > 0);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 5);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  if (TableStore.isLoading) return null;

  return (
    <div className="rounded-lg border border-[#27272A] bg-[#111112] relative">
      <div
        className="overflow-x-auto max-w-[1920px] min-w-[1280px] h-[calc(100vh-50px)]"
        ref={scrollContainerRef}
      >
        {showLeftGradient && (
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#111112] to-transparent z-10 pointer-events-none" />
        )}

        {showRightGradient && (
          <div className="absolute top-0 right-2 w-16 h-full bg-gradient-to-l from-[#111112] to-transparent z-10 pointer-events-none" />
        )}
        <table>
          <Header />
          <TableList items={TableStore.data.items} />
        </table>
      </div>
    </div>
  );
});

export default Table;
