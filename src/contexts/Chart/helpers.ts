import { COIN_WITH_HISTORY } from "../../hooks/getCoinsHistory";
import { COIN } from "../Coins/helpers";

export type CHART_DATA = {
  [key: string]: number;
};

export interface CHART_SERIE {
  id: string;
  color: string;
  name?: string;
}

export default interface ChartContextInterface {
  onResultChange: (input: string) => void;
  selectedCoins: COIN[];
  isLoadingAll: boolean;
  dataAll: COIN_WITH_HISTORY[];
  chartData: CHART_DATA[];
  chartSeries: CHART_SERIE[];
}

export const colors: { [key: string]: string } = {
  bitcoin: "#f7931a",
  ethereum: "#454a75",
  tether: "#009393",
  binancecoin: "#f1b90a",
  ripple: "#23292f",
  "usd-coin": "#2775ca",
  "staked-ether": "#36affd",
  cardano: "#236dd5",
  solana: "#8258f0",
  dodgecoin: "#bba034",
};

export const getRandomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

export const getCurrencyValue = (value: number, isCompact?: boolean) =>
  `$${value.toLocaleString("fr-FR", {
    maximumFractionDigits: value > 1 ? 2 : 5,
    notation: isCompact ? "compact" : "standard",
  })}`;
