import { useQueries } from "@tanstack/react-query";
import { API_COIN_HISTORY, client, getPath } from "../api";
import { COIN, COIN_HISTORY } from "../contexts/Coins/helpers";
import { useCallback, useMemo } from "react";

export type COIN_WITH_HISTORY = COIN & COIN_HISTORY;

const getCoinHistory = async (id: string): Promise<COIN_HISTORY> => {
  const { data } = await client.get(getPath(API_COIN_HISTORY, { id }), {
    params: {
      id,
      vs_currency: "usd",
      days: "30",
      interval: "daily",
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

  const dataAll = useMemo(() => {
    return list.reduce((result: COIN_WITH_HISTORY[], value: COIN, index) => {
      const query = queries[index];
      if (query && query.data) {
        const { prices } = query.data;
        return result.concat({
          ...value,
          prices: prices.slice(-30),
        });
      }
      return result;
    }, []);
  }, [list, queries]);

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
