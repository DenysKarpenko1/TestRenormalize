import { useState } from "react";
import { TableData } from "../types/TableData";

export const useFilter = (data: TableData[]) => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item["Product Name"].toLowerCase().includes(search.toLowerCase())
  );

  return { search, setSearch, filteredData };
};
