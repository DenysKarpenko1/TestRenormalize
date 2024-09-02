import TableHeadCell from "./TableHeadCell";

const TableHeader: React.FC = () => (
  <thead className="bg-gray-50 dark:bg-[#1D1E42]">
    <tr>
      <TableHeadCell>Tracking ID</TableHeadCell>
      <TableHeadCell>Product</TableHeadCell>
      <TableHeadCell isSorting>Customer</TableHeadCell>
      <TableHeadCell isSorting>Date</TableHeadCell>
      <TableHeadCell isSorting>Amount</TableHeadCell>
      <TableHeadCell>Payment Mode</TableHeadCell>
      <TableHeadCell isSorting>Status</TableHeadCell>
      <TableHeadCell>Action</TableHeadCell>
    </tr>
  </thead>
);

export default TableHeader;
