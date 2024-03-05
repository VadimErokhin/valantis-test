import { useMemo, useState } from "react";

interface PagedDataParams {
  limit: number;
  initialPage: number;
}


export function usePagedData(params: PagedDataParams) {
  const [page, setPage] = useState(params.initialPage);

  const offset = useMemo(() => {
   return (page - 1) * params.limit
  }, [page, params.limit])

  return {
    params: {
      offset,
      limit: params.limit,
    },
    page,
    setPage
  }
}