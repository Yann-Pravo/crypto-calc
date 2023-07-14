import axios from "axios";

export const client = axios.create();

export const API_BASE_URL = "https://api.coingecko.com/api/v3";

export const API_COINS_MARKET = API_BASE_URL + "/coins/markets";

export const API_COIN_HISTORY = API_BASE_URL + "/coins/:id/market_chart";

export const getPath = (path: string, params: { [key: string]: string }) => {
  let buildedPath = path;

  Object.keys(params).forEach((key) => {
    buildedPath = buildedPath.replace(`:${key}`, params[key]);
  });

  return buildedPath;
};
