import { useState, FC } from "react";
import DropdownIcon from "../assets/images/dropdownIcon.svg";

interface CustomDropdownProps {
  options: string[];
  onSelect: (selected: string) => void;
}

const CustomDropdown: FC<CustomDropdownProps> = ({ options, onSelect }) => {
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
      <div
        onClick={toggleDropdown}
        className="bg-white rounded-[6px] w-full border-[2px] h-12 flex justify-between items-center cursor-pointer p-4 border-gray2 "
      >
        {selectedOption || "Select an option"}
        <img src={DropdownIcon} />
      </div>
      {isOpen && (
        <ul className="absolute w-full mt-2 bg-white border border-gray2 rounded-[6px] ">
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
