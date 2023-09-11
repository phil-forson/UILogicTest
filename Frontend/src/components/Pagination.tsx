import ArrowLeftIcon from "../assets/images/icons/ArrowLeftIcon";
import ArrowRight from "../assets/images/icons/ArrowRight";
import Ellipsis from "./Ellipsis";
import { PageNumberDiv } from "./PageNumberDiv";

interface PaginationProps {
  currentPage: number;
  total: number;
  itemsPerPage: number;
  handlePageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  handlePageChange,
  total,
  itemsPerPage
}) => {
    const totalPages = Math.ceil(total/itemsPerPage)

  const canGoLeft = currentPage > 1;
  const canGoRight = currentPage < totalPages;

  return (
    <div className="flex items-center justify-end pt-[24px] space-x-[8px] text-white">
      <ArrowLeftIcon
        className={` ${
          canGoLeft
            ? "text-green1 cursor-pointer"
            : "text-primary2 cursor-not-allowed"
        }`}
        onClick={() => canGoLeft && handlePageChange(currentPage - 1)}
      />
      {/* First Page */}
      <PageNumberDiv pageNumber={1} currentPage={currentPage} onClick={handlePageChange} />

      {/* Ellipsis before current page */}
      {currentPage > 2 && <Ellipsis />}

      {currentPage === 1 && totalPages > 2 &&       <PageNumberDiv pageNumber={2} currentPage={currentPage} onClick={handlePageChange} />
}

      {/* Show current page if it's not the first or last page */}
      {currentPage !== 1 && currentPage !== totalPages && (
        <PageNumberDiv pageNumber={currentPage} currentPage={currentPage} onClick={handlePageChange} />
      )}

      {/* Show ellipsis if the current page is less than the last page - 1 */}
      {currentPage < totalPages - 2 && <Ellipsis />}

      {/* Last Page if not first */}
      {totalPages !== 1 && (
        <PageNumberDiv pageNumber={totalPages} currentPage={currentPage} onClick={handlePageChange} />
      )}
      <ArrowRight
        className={` ${
          canGoRight
            ? "cursor-pointer text-green1"
            : "text-primary2 cursor-not-allowed"
        }`}
        onClick={() => canGoRight && handlePageChange(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
