import { TableData } from "../types/TableData";
import { useFilter } from "../hooks/useFilter";
import { tableData as initialData } from "../mocks/tableData";
import { usePagination } from "../hooks/usePagination";
import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "./TablePagination";
import RowsSelect from "./RowsSelect";
import SearchInput from "./SearchInput";

const Table: React.FC = ({}) => {
  const [tableData, setTableData] = useState<TableData[]>(initialData);

  const { search, setSearch, filteredData } = useFilter(tableData);

  const {
    currentPage,
    rowsPerPage,
    totalPages,
    indexOfLastRow,
    indexOfFirstRow,
    handlePageChange,
    handleRowsPerPageChange,
    handlePreviousPage,
    handleNextPage,
  } = usePagination({
    page: 1,
    perPage: 10,
    totalRows: filteredData.length,
  });

  const currentData = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const handleDeleteRow = (id: number) =>
    setTableData((prevData) =>
      prevData.filter((item) => item["Tracking ID"] !== id)
    );

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <RowsSelect
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
          <SearchInput search={search} onSearchChange={setSearch} />
        </div>
        <div>
          <button
            className="border rounded-lg px-4 py-2 bg-custom-purple text-white 
              dark:border-none"
          >
            + Add Customer
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader />
          <tbody className="divide-y divide-gray-200 border-none">
            {currentData.map((item, index) => (
              <TableRow
                index={index}
                key={index}
                item={item}
                onDeleteRow={() => handleDeleteRow(item["Tracking ID"])}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onHandlePreviousPage={handlePreviousPage}
        onHandleNextPage={() => handleNextPage(totalPages)}
        onHandlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
