interface PaginationProps {
  currentPage: number;
  totalPages: number;

  onHandlePreviousPage: () => void;
  onHandleNextPage: () => void;
  onHandlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onHandlePreviousPage,
  onHandleNextPage,
  onHandlePageChange,
}) => {
  const getButtonClassName = (isDisabled: boolean) => {
    return `cursor-pointer ${
      isDisabled
        ? "text-[#9E9E9E] opacity-50 cursor-not-allowed"
        : "text-black dark:text-white"
    }`;
  };

  const getPageButtonClassName = (isCurrentPage: boolean) => {
    return isCurrentPage
      ? "bg-violet-700 text-white"
      : "bg-[#E0E0E0] dark:bg-[#141432] dark:text-white";
  };

  const isPreviousDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  return (
    <div
      className="flex justify-center items-center py-4 space-x-3 bg-white 
        dark:bg-[#1D1E42]"
    >
      <span
        className={getButtonClassName(isPreviousDisabled)}
        onClick={!isPreviousDisabled ? onHandlePreviousPage : undefined}
      >
        Previous
      </span>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`rounded-lg w-8 h-8 ${getPageButtonClassName(
            currentPage === index + 1
          )}`}
          onClick={() => onHandlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <span
        className={getButtonClassName(isNextDisabled)}
        onClick={!isNextDisabled ? onHandleNextPage : undefined}
      >
        Next
      </span>
    </div>
  );
};

export default Pagination;
