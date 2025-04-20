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

  return (
    <div className="relative overflow-x-auto max-w-full">
      <ItemList items={TableStore.data.items} />
    </div>
  );
});

export default Table;
