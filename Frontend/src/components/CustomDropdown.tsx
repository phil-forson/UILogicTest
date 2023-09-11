import { useState, FC } from "react";
import DropdownIcon from "../assets/images/dropdownIcon.svg";

interface CustomDropdownProps {
  label?: string;
  options: string[];
  onSelect: (selected: string) => void;
  error?: string | null
}

const CustomDropdown: FC<CustomDropdownProps> = ({
  label,
  options,
  onSelect,
  error
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {label && <label>{label}</label>}
      <div
        onClick={toggleDropdown}
        className="bg-white rounded-[6px] mt-4 w-full border-[2px] h-12 flex justify-between items-center cursor-pointer p-4 border-gray2 "
      >
        {selectedOption || "Select an option"}
        <img src={DropdownIcon} />
      </div>
      {error && (
        <span className="text-red-500 text-[12px] flex justify-end">
          {error}
        </span>
      )}

      {isOpen && (
        <ul className="absolute w-full mt-1 h-12 bg-white border border-gray2 rounded-[6px] ">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-2 hover:bg-primary5 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
