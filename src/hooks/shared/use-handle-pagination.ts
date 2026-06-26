import { parseAsInteger, useQueryState } from "nuqs";

import { DEFAULT_PAGINATION } from "@/constants/pagination";

export const useHandlePagination = () => {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(DEFAULT_PAGINATION.page),
  );
  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsInteger.withDefault(DEFAULT_PAGINATION.limit),
  );
  const resetPagination = () => {
    setPage(null);
    setLimit(null);
  };

  return {
    page,
    limit,
    setLimit,
    resetPagination,
    setPage,
  };
};
