import React, { useState, FC } from "react";

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxWords: number;
  name: string;
  placeholder?: string;
  label?: string;
  error?: string | null;
}

const CustomTextArea: FC<TextAreaProps> = ({
  maxWords,
  placeholder,
  label,
  value,
  name,
  onChange,
  error,
}) => {
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    const newText = e.target.value;
    const newWordCount = newText.length;

    if (newWordCount <= maxWords) {
      setWordCount(newWordCount);
    }
  };

  return (
    <div className="flex flex-col">
      {label && <label className="pb-4">{label}</label>}
      <textarea
        value={value}
        onChange={handleTextChange}
        className="border-[2px] h-[120px] lg:h-[240px] p-4 border-gray2 rounded-[6px] outline-none w-[300px] md:w-[380px] lg:w-[416px] resize-none"
        placeholder={placeholder}
        name={name}
      />
      <span className="flex justify-end text-primary3">
        Max: {wordCount} / {maxWords} words
      </span>
      {error && (
        <span className="text-red-500 text-[12px] flex justify-end">
          {error}
        </span>
      )}
    </div>
  );
};

export default CustomTextArea;
