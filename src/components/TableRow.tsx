import TableCell from "./TableCell";
import Image from "next/image";
import { TableData } from "../types/TableData";

interface TableRowProps {
  item: TableData;
  index: number;
  onDeleteRow: () => void;
}

const getRowClass = (index: number) => {
  return index % 2 === 0
    ? "dark:bg-[#26264F] bg-white"
    : "dark:bg-[#1D1E42] bg-custom-light-blue";
};

const getRowStatusClass = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-[#EBF9F1] text-green-500";
    case "Cancelled":
      return "bg-[#FBE7E8] text-red-500";
    default:
      return "bg-[#FEF2E5] text-orange-400";
  }
};

const TableRow: React.FC<TableRowProps> = ({
  item,
  index,

  onDeleteRow,
}) => (
  <tr className={getRowClass(index)}>
    <TableCell className="pl-10 text-black dark:text-white">
      #{item["Tracking ID"]}
    </TableCell>
    <TableCell className="text-black dark:text-white">
      <div className="flex items-center">
        <Image
          src={item["Product Image"]}
          alt={item["Product Name"]}
          width={32}
          height={32}
          className="w-8 h-8 object-cover rounded-lg mr-2"
        />
        {item["Product Name"]}
      </div>
    </TableCell>
    <TableCell className="text-black dark:text-white">
      {item["Customer"]}
    </TableCell>
    <TableCell className="text-black dark:text-white">{item["Date"]}</TableCell>
    <TableCell className="text-black dark:text-white">
      ${item["Amount"].toFixed(2)}
    </TableCell>
    <TableCell className="text-black dark:text-white">
      {item["Payment Mode"]}
    </TableCell>
    <TableCell className="flex items-center">
      <div
        className={`${getRowStatusClass(
          item["Status"]
        )}  border-0 px-3 py-2 rounded-[16px]`}
      >
        {item["Status"]}
      </div>
    </TableCell>

    <TableCell className="text-black">
      <div className="space-x-2">
        <button>
          <Image src="/edit.svg" alt="edit" width={24} height={24} />
        </button>
        <button onClick={() => onDeleteRow()}>
          <Image src="/trash.svg" alt="trash" width={24} height={24} />
        </button>
      </div>
    </TableCell>
  </tr>
);

export default TableRow;
