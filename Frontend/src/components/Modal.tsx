import { FC } from "react";
import ReactDOM from "react-dom";
import CreateCampaignForm from "./CampaignForm";
import ModalHeader from "./ModalHeader";
import { Backdrop } from "./Backdrop";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;

  setCampaignCreated: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, setCampaignCreated }) => {
  if (!isOpen) {
    return null;
  }

  

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 flex items-center justify-center m-auto z-50">
        <Backdrop onClick={onClose} />
        <div className="bg-white p-8 rounded-[8px] pointer-events-auto z-50 shadow">
          <ModalHeader text="Create a campaign" />
          <CreateCampaignForm handleCloseModal={onClose} setCampaignCreated={setCampaignCreated}/>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") as Element
  );
};

export default Modal;
