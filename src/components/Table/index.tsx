"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ItemList from "./ItemList";
import TableStore from "@/store";

const Table = observer(() => {
  useEffect(() => {
    TableStore.getData();
  }, []);

  if (TableStore.isLoading) return <p>Загрузка...</p>;

  return <ItemList items={TableStore.data.items} />;
});

export default Table;
