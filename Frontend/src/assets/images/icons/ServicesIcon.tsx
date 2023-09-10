import React from "react";

type Props = {
  className: string;
};
const ServicesIcon: React.FC<Props> = ({ className }) => {
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
        d="M14.8285 8.33332H16.4952C18.1618 8.33332 18.9952 7.49999 18.9952 5.83332V4.16666C18.9952 2.49999 18.1618 1.66666 16.4952 1.66666H14.8285C13.1618 1.66666 12.3285 2.49999 12.3285 4.16666V5.83332C12.3285 7.49999 13.1618 8.33332 14.8285 8.33332Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.82849 18.3333H6.49516C8.16182 18.3333 8.99516 17.5 8.99516 15.8333V14.1667C8.99516 12.5 8.16182 11.6667 6.49516 11.6667H4.82849C3.16182 11.6667 2.32849 12.5 2.32849 14.1667V15.8333C2.32849 17.5 3.16182 18.3333 4.82849 18.3333Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.66182 8.33332C7.50277 8.33332 8.99516 6.84094 8.99516 4.99999C8.99516 3.15904 7.50277 1.66666 5.66182 1.66666C3.82088 1.66666 2.32849 3.15904 2.32849 4.99999C2.32849 6.84094 3.82088 8.33332 5.66182 8.33332Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6618 18.3333C17.5028 18.3333 18.9952 16.8409 18.9952 15C18.9952 13.159 17.5028 11.6667 15.6618 11.6667C13.8209 11.6667 12.3285 13.159 12.3285 15C12.3285 16.8409 13.8209 18.3333 15.6618 18.3333Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ServicesIcon;
