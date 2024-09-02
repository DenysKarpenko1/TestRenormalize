import Image from "next/image";

interface TableHeadCellProps {
  children: string;
  isSorting?: boolean;
}

const TableHeadCell: React.FC<TableHeadCellProps> = ({
  children,
  isSorting = false,
}) => (
  <th className="px-6 text-left text-sm font-bold tracking-wider py-4 text-black dark:text-white">
    <div className="flex items-center">
      {isSorting && (
        <Image
          src="/btn-sorting.svg"
          alt="btn-sorting"
          width={16}
          height={16}
          className="mr-2"
        />
      )}
      {children}
    </div>
  </th>
);

export default TableHeadCell;
