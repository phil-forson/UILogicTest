import React from "react";
import CreateCampaignIcon from "../assets/images/icons/CreateCampaignIcon";

interface Props {
  text: string;
}
const ModalHeader: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex space-x-[8px] items-center">
      <CreateCampaignIcon className="text-black" />
      <span className=" text-[16px] xl:text-[18px]">{text}</span>
    </div>
  );
};

export default ModalHeader;
