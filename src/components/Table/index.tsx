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

  useEffect(() => {
    TableStore.getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll");
      console.log(scrollContainerRef.current);
      if (!scrollContainerRef.current) return;

      const { scrollLeft } = scrollContainerRef.current;

      alert(scrollLeft);

      setShowLeftGradient(scrollLeft > 0);
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
    <div className="rounded-lg border border-[#27272A] bg-[#111112] relative min-w-[1280px] max-w-[1920px] w-[1696px]">
      <div
        className="overflow-x-auto max-w-[1920px] min-w-[1280px] h-[922px]"
        ref={scrollContainerRef}
      >
        {showLeftGradient && (
          <>
            <div className="absolute top-0 left-40 w-40 h-[910px] bg-gradient-to-r from-[#111112] to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-2 w-40 h-[910px] bg-gradient-to-l from-[#111112] to-transparent pointer-events-none z-10" />
          </>
        )}

        <table className="overflow-y-auto">
          <Header />
          <TableList items={TableStore.data.items} />
        </table>
      </div>
    </div>
  );
});

export default Table;
