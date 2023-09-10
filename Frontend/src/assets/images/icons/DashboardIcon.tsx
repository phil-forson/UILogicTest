import React from "react";

type Props = {
  className: string;
};
const DashboardIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.6619 15V12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.05359 2.35001L3.27859 6.97501C2.62859 7.49167 2.21192 8.58334 2.35359 9.40001L3.46192 16.0333C3.66192 17.2167 4.79526 18.175 5.99526 18.175H15.3286C16.5203 18.175 17.6619 17.2083 17.8619 16.0333L18.9703 9.40001C19.1036 8.58334 18.6869 7.49167 18.0453 6.97501L12.2703 2.35834C11.3786 1.64167 9.93692 1.64167 9.05359 2.35001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
