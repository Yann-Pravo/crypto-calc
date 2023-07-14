import React, { createContext, useMemo, useState } from "react";
import ChartContextInterface from "./helpers";
import { COIN } from "../Coins/helpers";
import useGetCoinsHistory from "../../hooks/getCoinsHistory";

export const ChartContext = createContext<ChartContextInterface>(
  {} as ChartContextInterface
);

interface ChartContextProviderProps {
  children: React.ReactNode;
}

const ChartContextProvider = ({ children }: ChartContextProviderProps) => {
  const [selectedCoins, setSelectectedCoins] = useState<COIN[]>([]);

  const sortedSelectedCoins = useMemo(
    () =>
      selectedCoins.sort(
        ({ current_price: priceA }, { current_price: priceB }) =>
          priceB - priceA
      ),
    [selectedCoins]
  );

  const { queries, isLoadingAll, dataAll } =
    useGetCoinsHistory(sortedSelectedCoins);

  console.log({ queries, isLoadingAll, dataAll });

  return (
    <ChartContext.Provider
      value={{
        selectedCoins: sortedSelectedCoins,
        setSelectectedCoins,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
};

export default ChartContextProvider;
