"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import TableStore from "@/store";
import Header from "./Header";
import Body from "./Body";
import Loading from "../Loading";
import "./styles.scss";

const Table = observer(() => {
  useEffect(() => {
    TableStore.getData();
  }, []);

  // if (TableStore.isLoading) return <Loading />;

  return (
    <table className="">
      <Header />
      {/* <Body items={TableStore.data.items} /> */}
    </table>
  );
});

export default Table;
