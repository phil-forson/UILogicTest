import React from "react";

type Props = {
  className: string;
  onClick?: () => void;
};
const ArrowRight: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M11.1666 5.18288L1.16663 5.18288"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.13342 9.19914L11.1668 5.18314L7.13342 1.16647"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
