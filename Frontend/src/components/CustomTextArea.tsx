import React, { useState, FC } from "react";

interface TextAreaProps {
  maxWords: number;
  placeholder?: string;
}

const CustomTextArea: FC<TextAreaProps> = ({ maxWords, placeholder = "" }) => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    const newWordCount = newText.length;
    console.log("bew text ", newWordCount);

    if (newWordCount <= maxWords) {
      setText(newText);
      setWordCount(newWordCount);
    }
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleTextChange}
        className="border-[2px] h-[240px] p-4 border-gray2 rounded-[6px] outline-none w-[416px] resize-none"
        placeholder={placeholder}
      />
      <span className="flex justify-end text-primary3">
        Max: {wordCount} / {maxWords} words
      </span>
    </>
  );
};

export default CustomTextArea;
