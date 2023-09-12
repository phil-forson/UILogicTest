import React from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  error,
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="pb-4">{label}</label>}
      <input
        type="text"
        className="border-[2px] h-12 p-4 border-gray2 rounded-[6px] outline-none w-full"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
      {error && <span className="text-red-500 text-[12px] flex justify-end">{error}</span>}
    </div>
  );
};

export default InputComponent;
