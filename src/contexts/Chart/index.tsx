import React, { createContext, useContext, useMemo, useState } from "react";
import ChartContextInterface, {
  CHART_DATA,
  CHART_SERIE,
  colors,
  getRandomColor,
} from "./helpers";
import { COIN } from "../Coins/helpers";
import useGetCoinsHistory from "../../hooks/getCoinsHistory";
import { CoinsContext } from "../Coins";

export const ChartContext = createContext<ChartContextInterface>(
  {} as ChartContextInterface
);

interface ChartContextProviderProps {
  children: React.ReactNode;
}

const ChartContextProvider = ({ children }: ChartContextProviderProps) => {
  const { coins } = useContext(CoinsContext);
  const [selectedCoins, setSelectectedCoins] = useState<COIN[]>([]);

  const sortedSelectedCoins = useMemo(
    () =>
      selectedCoins.sort(
        ({ current_price: priceA }, { current_price: priceB }) =>
          priceB - priceA
      ),
    [selectedCoins]
  );

  const extractSelectedCoins = (input: string) => {
    const temp = input.split(" ").reduce((result: COIN[], value: string) => {
      if (coins[value] && !result.includes(coins[value])) {
        return result.concat(coins[value]);
      }
      return result;
    }, []);

    setSelectectedCoins(temp);
  };

  const onResultChange = (input: string) => {
    extractSelectedCoins(input);
  };

  const { isLoadingAll, dataAll } = useGetCoinsHistory(sortedSelectedCoins);

  const chartData: CHART_DATA[] = useMemo(() => {
    if (isLoadingAll || dataAll.length === 0) return [];

    return dataAll[0].prices.map((price, index) => {
      const history: CHART_DATA = {
        date: price[0],
      };
      dataAll.forEach((coin) => {
        history[coin.id] = coin.prices[index][1];
      });
      return history;
    });
  }, [dataAll, isLoadingAll]);

  const chartSeries: CHART_SERIE[] = useMemo(() => {
    if (isLoadingAll || dataAll.length === 0) return [];

    return dataAll.map(({ id, name }) => ({
      id,
      name,
      color: colors[id] ? colors[id] : getRandomColor(),
    }));
  }, [dataAll, isLoadingAll]);

  return (
    <ChartContext.Provider
      value={{
        selectedCoins: sortedSelectedCoins,
        onResultChange,
        isLoadingAll,
        dataAll,
        chartData,
        chartSeries,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
};

export default ChartContextProvider;
