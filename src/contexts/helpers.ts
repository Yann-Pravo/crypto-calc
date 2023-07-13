export type COIN = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
};

export default interface CoinsContextInterface {
  list: COIN[];
  coins: { [key: string]: COIN };
  isLoading: boolean;
}
