import SearchIcon from "../assets/images/searchIcon.svg";

interface Props {
    searchValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch : () => void
}
const SearchBar: React.FC<Props> = ({searchValue, onChange, onSearch}) => {
  return (
    <div className="flex gap-[8px]">
      <div className="h-full md:w-[498px] w-full border-[2px] border-gray2 rounded-[6px] flex items-center space-x-[10px] bg-white p-[16px] ">
        <img src={SearchIcon} className="w-[20px] h-[20px]" />
        <input
          className="outline-none h-full w-full text-primary3"
          placeholder="Search customer log by customer name, email address & phone number"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              onSearch();
            }
          }}
        />
      </div>
      <div className="p-[16px] bg-white rounded-[6px] text-green1 border-[1px] border-green1 cursor-pointer" onClick={onSearch}>
        Search
      </div>
    </div>
  );
};

export default SearchBar;