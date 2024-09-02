import Image from "next/image";

interface SearchInputProps {
  search: string;
  onSearchChange: (event: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  search,
  onSearchChange,
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-md px-4 py-2 pl-10 bg-slate-200 border-gray-300
          dark:bg-[#141432] dark:border-white"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Image
        src="/search.svg"
        alt="search"
        width={20}
        height={20}
        className="absolute left-3 top-1/2 transform -translate-y-1/2  
          dark:white"
      />
    </div>
  );
};

export default SearchInput;
