"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import TableStore from "@/store";
import Header from "./Header";
import Body from "./Body";

const Table = observer(() => {
  useEffect(() => {
    TableStore.getData();
  }, []);

  if (TableStore.isLoading) return <p>Загрузка...</p>;

  return (
    <table className="border border-[#27272A] bg-[#111112]">
      <Header />
      <Body items={TableStore.data.items} />
    </table>
  );
});

export default Table;
