import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface CustomPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

export function CustomPagination({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}: CustomPaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  // Reset to page 1 when data changes
  //   useEffect(() => {
  //     setCurrentPage(1)
  //   }, [totalItems])

  // Calculate visible pages
  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
      return [1, 2, 3];
    } else if (currentPage >= totalPages - 1) {
      return [totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  const visiblePages = getVisiblePages();
  const showEndEllipsis = totalPages > 3 && currentPage < totalPages - 1;
  const showStartEllipsis = totalPages > 3 && currentPage > 2;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (totalPages <= 1) return null;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {showStartEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {visiblePages.map((page) => (
          <PaginationItem
            key={page}
            className={cn(currentPage === page && "rounded-lg border")}
          >
            <PaginationLink
              onClick={() => handlePageChange(page)}
              isActive={currentPage === page}
              className="cursor-pointer"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {showEndEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
