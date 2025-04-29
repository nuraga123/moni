'use client';

import { makeAutoObservable } from "mobx";
import { ItemsResponse } from "@/types";
import { fetchData } from "@/utils/fetchData";

export class TableStore {
  data: ItemsResponse = { items: [] };
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getData() {
    this.isLoading = true;
    try {
      const response = await fetchData();
      this.data = response;
    } catch (error) {
      console.error("error: ", error);
    } finally {
      this.isLoading = false;
    }
  }
}

const store = new TableStore();
export default store;
