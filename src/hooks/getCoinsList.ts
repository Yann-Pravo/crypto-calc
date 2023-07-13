import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_COINS_MARKET, client } from "../api";
import { COIN } from "../contexts/helpers";

const getCoinsList = async (): Promise<COIN[]> => {
  const { data } = await client.get(API_COINS_MARKET, {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
      sparkline: false,
      locale: "en",
    },
  });

  return data;
};

const useGetCoinsList = (props = {}) => {
  return useQuery<COIN[], AxiosError>(["coinsList"], getCoinsList, {
    ...props,
  });
};
export default useGetCoinsList;
