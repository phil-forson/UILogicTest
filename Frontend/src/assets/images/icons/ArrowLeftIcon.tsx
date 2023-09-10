import React from "react";

type Props = {
  className: string;
  onClick?: () => void
};
const ArrowLeftIcon: React.FC<Props> = ({ className, onClick }) => {
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
        d="M0.833374 5.18288L10.8334 5.18288"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.86658 9.19914L0.833243 5.18314L4.86658 1.16647"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
