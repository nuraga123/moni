"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import TableStore from "@/store";
import Header from "./Header";
import TableList from "./TableList";
import Loading from "../Loading";
import "./styles.scss";

const Table = observer(() => {
  useEffect(() => {
    TableStore.getData();
  }, []);

  if (TableStore.isLoading) return null;

  return (
    <table>
      <Header />
      <TableList items={TableStore.data.items} />
    </table>
  );
});

export default Table;
