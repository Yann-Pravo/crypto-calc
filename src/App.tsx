import React from "react";
import "./App.css";
import CoinsContextProvider from "./contexts/Coins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChartContextProvider from "./contexts/Chart";
import Main from "./containers/Main";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CoinsContextProvider>
        <ChartContextProvider>
          <Main />
        </ChartContextProvider>
      </CoinsContextProvider>
    </QueryClientProvider>
  );
};

export default App;
