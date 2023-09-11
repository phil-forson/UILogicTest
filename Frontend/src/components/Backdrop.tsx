interface BackdropProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Backdrop: React.FC<BackdropProps> = ({ onClick }) => (
  <div className="fixed inset-0 backdrop-blur-sm z-40" onClick={onClick}></div>
);
