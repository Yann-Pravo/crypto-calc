import React, { createContext, useEffect, useState } from "react";
import useGetCoinsList from "../../hooks/getCoinsList";
import CoinsContextInterface, { COIN } from "./helpers";

export const CoinsContext = createContext<CoinsContextInterface>(
  {} as CoinsContextInterface
);

interface CoinsContextProviderProps {
  children: React.ReactNode;
}

const CoinsContextProvider = ({ children }: CoinsContextProviderProps) => {
  const { data = [], isLoading } = useGetCoinsList();
  const [coins, setCoins] = useState<{ [key: string]: COIN }>({});

  useEffect(() => {
    const temp: { [key: string]: COIN } = {};
    data.forEach((data) => {
      temp[data.id] = data;
    });

    setCoins(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length]);

  return (
    <CoinsContext.Provider
      value={{
        list: data,
        coins,
        isLoading,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export default CoinsContextProvider;
