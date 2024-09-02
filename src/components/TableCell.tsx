import { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children, className = "" }) => {
  return (
    <td
      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${className}`}
    >
      {children}
    </td>
  );
};

export default TableCell;
