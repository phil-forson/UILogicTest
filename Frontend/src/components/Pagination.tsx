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
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(total / itemsPerPage);

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

      {/* Always show the first page */}
      <PageNumberDiv
        pageNumber={1}
        currentPage={currentPage}
        onClick={handlePageChange}
      />

      {/* Conditionally show ellipsis before current page */}
      {totalPages > 3 && currentPage > 2 && <Ellipsis />}

      {/* Conditionally show the second page or current page */}
      {totalPages === 2 && (
        <PageNumberDiv
          pageNumber={2}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}
      {totalPages === 3 && (
        <PageNumberDiv
          pageNumber={2}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}
      {totalPages === 4 && currentPage === 1 && (
        <PageNumberDiv
          pageNumber={2}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}
      {totalPages > 4 && currentPage !== 1 && currentPage !== totalPages && (
        <PageNumberDiv
          pageNumber={currentPage}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}

      {/* Conditionally show the second page or current page */}
      {totalPages === 2 && (
        <PageNumberDiv
          pageNumber={2}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}
      {totalPages === 3 && (
        <PageNumberDiv
          pageNumber={2}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}
      {totalPages > 3 && currentPage !== 1 && currentPage !== totalPages && (
        <PageNumberDiv
          pageNumber={currentPage}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}

      {/* Conditionally show ellipsis after current page */}
      {totalPages > 3 && currentPage < totalPages - 1 && <Ellipsis />}

      {/* Conditionally show the second page or current page */}
      {totalPages === 2 && (
        <PageNumberDiv
          pageNumber={2}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}
      {totalPages === 3 && (
        <PageNumberDiv
          pageNumber={2}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}
      
      {totalPages === 4 && currentPage === 4 && (
        <PageNumberDiv
          pageNumber={3}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}
      {totalPages > 4 && currentPage !== 1 && currentPage !== totalPages && (
        <PageNumberDiv
          pageNumber={currentPage}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      )}

      {/* Always show the last page if more than one page */}
      {totalPages > 1 && (
        <PageNumberDiv
          pageNumber={totalPages}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
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
