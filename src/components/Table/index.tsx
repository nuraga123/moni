"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import TableStore from "@/store";
import Header from "./Header";
import TableList from "./TableList";
import Loading from "../Loading";

const Table = observer(() => {
  useEffect(() => {
    TableStore.getData();
  }, []);

  if (TableStore.isLoading) return null;

  return (
    <div className="rounded-lg border border-[#27272A] bg-[#111112]">
      <table>
        <Header />
        <TableList items={TableStore.data.items} />
      </table>
    </div>
  );
});

export default Table;
