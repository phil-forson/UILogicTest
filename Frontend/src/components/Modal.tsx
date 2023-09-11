import { FC } from "react";
import ReactDOM from "react-dom";
import CreateCampaignForm from "./CampaignForm";
import ModalHeader from "./ModalHeader";
import { Backdrop } from "./Backdrop";
import { Campaign } from "../../types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaigns: Campaign[]
  setCampaigns: React.Dispatch<React.SetStateAction<Campaign[]>>
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, campaigns, setCampaigns }) => {
  if (!isOpen) {
    return null;
  }

  

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 flex items-center justify-center m-auto z-50">
        <Backdrop onClick={onClose} />
        <div className="bg-white p-8 rounded-[8px] pointer-events-auto z-50 shadow">
          <ModalHeader text="Create a campaign" />
          <CreateCampaignForm handleCloseModal={onClose} campaigns={campaigns} setCampaigns={setCampaigns}/>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") as Element
  );
};

export default Modal;
