import { type UseQueryResult } from "@tanstack/react-query";
import { useCallback, useState } from "react";

type AsyncFunction<T = unknown> = () => Promise<T>;

type UseRefreshingReturn = [boolean, AsyncFunction];

type QueryResultOrRefreshFn = AsyncFunction | UseQueryResult;

export const useRefreshControl = (
  ...sources: QueryResultOrRefreshFn[]
): UseRefreshingReturn => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    try {
      setIsRefreshing(true);
      await Promise.all(
        sources.map((source) => {
          if (typeof source === "function") {
            return source();
          } else {
            return source.refetch();
          }
        }),
      );
    } finally {
      setIsRefreshing(false);
    }
  }, [sources]);

  return [isRefreshing, refresh];
};
