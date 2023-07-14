import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import CoinsContextProvider from "./contexts/Coins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChartContextProvider from "./contexts/Chart";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChartContextProvider>
        <CoinsContextProvider>
          <Calculator />
        </CoinsContextProvider>
      </ChartContextProvider>
    </QueryClientProvider>
  );
};

export default App;
