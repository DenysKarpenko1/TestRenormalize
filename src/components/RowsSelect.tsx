interface RowsSelectProps {
  rowsPerPage: number;
  onRowsPerPageChange: (event: string) => void;
}

const RowsSelect: React.FC<RowsSelectProps> = ({
  rowsPerPage,
  onRowsPerPageChange,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <span>Show</span>
      <select
        className="border border-gray-300 rounded-md px-1 py-1 bg-slate-200
          dark:bg-[#141432] border-none"
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange(e.target.value)}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
      <span>entries</span>
    </div>
  );
};

export default RowsSelect;
