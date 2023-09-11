interface PageNumberDivProps {
    pageNumber: number;
    currentPage: number;
    onClick?: (pageNumber: number) => void;
  }
  
 export const PageNumberDiv: React.FC<PageNumberDivProps> = ({ pageNumber, currentPage, onClick }) => {
    const isActive = pageNumber === currentPage;
    const bgColor = isActive ? 'bg-green1' : 'bg-white';
    const textColor = isActive ? 'text-white' : 'text-green1';
  
    return (
      <div
        className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ${bgColor} ${textColor}`}
        onClick={() => onClick ? onClick(pageNumber): null}
      >
        {pageNumber}
      </div>
    );
  };