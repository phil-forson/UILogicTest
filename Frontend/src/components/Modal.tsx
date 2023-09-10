import { FC } from "react";
import ReactDOM from "react-dom";
import CreateCampaignIcon from "../assets/images/icons/CreateCampaignIcon";
import CustomDropdown from "./CustomDropdown";
import CustomTextArea from "./CustomTextArea";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSelect = (selected: string) => {
    console.log(`Selected option: ${selected}`);
  };


  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="fixed inset-0 backdrop-blur-sm z-40"
          onClick={handleBackdropClick}
        ></div>

        <div className="bg-white p-8 rounded-[8px] pointer-events-auto z-50 shadow">
          <div className="flex space-x-[8px] items-center">
            <CreateCampaignIcon className="text-black" />
            <span className="text-[20px]">Create a campaign</span>
          </div>
          <div className="pt-[40px] ">
            <div className="pb-4">Campaign Title</div>
            <input
              className="border-[2px] h-12 p-4 border-gray2 rounded-[6px] outline-none w-[416px]"
              placeholder="Write your campaign here"
            />
          </div>
          <div className="pt-8">
            <div className="pb-4">Description</div>
            <CustomTextArea maxWords={100} placeholder="Write your description here"/>
          </div>
          <div className="pt-8">
            <div className="pb-4">Target group</div>
            <CustomDropdown
              options={["All customers"]}
              onSelect={handleSelect}
            />
          </div>
          <div className="pt-8  text-white" onClick={onClose}>
            <div className="h-12 bg-green1 flex justify-center items-center rounded-[6px] cursor-pointer">
              Submit your comment
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") as Element
  );
};

export default Modal;
