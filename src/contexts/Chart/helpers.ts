import { COIN } from "../Coins/helpers";

export default interface ChartContextInterface {
  setSelectectedCoins: (coins: COIN[]) => void;
  selectedCoins: COIN[];
}
