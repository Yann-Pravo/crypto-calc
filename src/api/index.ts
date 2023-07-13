import axios from "axios";

export const client = axios.create();

export const API_BASE_URL = "https://api.coingecko.com/api/v3";

export const API_COINS_MARKET = API_BASE_URL + "/coins/markets";
