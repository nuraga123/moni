import axios from "axios";
import { ItemsResponse } from "@/types";

// Асинхронная функция для получения данных
export const fetchData = async (): Promise<ItemsResponse> => {
  const BASE_URL =
    "https://api.printer.getmoni.io/api/v1/token/?limit=50&offset=0";
  const { data } = await axios.get(BASE_URL);
  return data;
};
