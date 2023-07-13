import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import CoinsContextProvider from "./contexts/coins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CoinsContextProvider>
        <Calculator />
      </CoinsContextProvider>
    </QueryClientProvider>
  );
};

export default App;
