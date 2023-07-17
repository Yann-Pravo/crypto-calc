import React, { useContext } from "react";
import { ChartContext } from "../contexts/Chart";
import { getCurrencyValue } from "../contexts/Chart/helpers";

const Tokens: React.FC = () => {
  const { selectedCoins } = useContext(ChartContext);
  console.log({ selectedCoins });
  return (
    <div className="h-[230px] flex flex-col gap-2">
      {selectedCoins.map((coin) => (
        <div className="flex items-center gap-2 flex-wrap">
          <img src={coin.image} alt={coin.name} width={24} height={24} />
          <div className="whitespace-nowrap">{coin.name}</div>
          <span className="text-gray-400 whitespace-nowrap">
            (price: {getCurrencyValue(coin.current_price, true)},
          </span>
          <span className="text-gray-400 whitespace-nowrap">
            ath: {getCurrencyValue(coin.ath, true)},
          </span>
          <span className="text-gray-400 whitespace-nowrap">
            market cap: {getCurrencyValue(coin.market_cap, true)})
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tokens;
