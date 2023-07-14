import { UseQueryResult, useQueries, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_COIN_HISTORY, client, getPath } from "../api";
import { COIN, COIN_HISTORY } from "../contexts/Coins/helpers";
import { useCallback, useMemo } from "react";

const getCoinHistory = async (id: string): Promise<COIN_HISTORY> => {
  const { data } = await client.get(getPath(API_COIN_HISTORY, { id }), {
    params: {
      id,
      vs_currency: "usd",
      days: "30",
    },
  });

  return data;
};

const useGetCoinsHistory = (list: COIN[], props = {}) => {
  const queries = useQueries({
    queries: list.map((coin) => {
      return {
        queryKey: ["coin", coin.id],
        queryFn: () => getCoinHistory(coin.id),
        refetchOnWindowFocus: false,
        ...props,
      };
    }),
  });

  const refetchAll = useCallback(() => {
    queries.forEach((query) => query.refetch());
  }, [queries]);

  const dataAll = useMemo(
    () =>
      queries.reduce(
        (
          result: COIN_HISTORY[],
          value: UseQueryResult<COIN_HISTORY, unknown>
        ) => {
          if (value.data) {
            return result.concat(value.data);
          }
          return result;
        },
        []
      ),
    [queries]
  );

  const isLoadingAll = useMemo(
    () => Boolean(queries.find((query) => query.isLoading)),
    [queries]
  );

  return {
    queries,
    dataAll,
    refetchAll,
    isLoadingAll,
  };
};
export default useGetCoinsHistory;
