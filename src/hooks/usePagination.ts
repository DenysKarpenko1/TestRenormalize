import { useState } from "react";

interface PaginationParams {
  page: number;
  perPage: number;
  totalRows: number;
}

export const usePagination = ({
  page,
  perPage,
  totalRows,
}: PaginationParams) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [rowsPerPage, setRowsPerPage] = useState(perPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const handlePreviousPage = () =>
    handlePageChange(Math.max(currentPage - 1, 1));

  const handleNextPage = (totalPages: number) =>
    handlePageChange(Math.min(currentPage + 1, totalPages));

  return {
    currentPage,
    rowsPerPage,
    totalPages,
    indexOfLastRow,
    indexOfFirstRow,
    handlePageChange,
    handleRowsPerPageChange,
    handlePreviousPage,
    handleNextPage,
  };
};
