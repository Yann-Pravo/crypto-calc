import React from "react";
import Calculator from "../components/Calculator";
import Charts from "./Charts";
import Tokens from "./Tokens";

const Main: React.FC = () => (
  <div className="bg-gray-200 w-screen h-full min-h-screen p-6 flex justify-center items-center">
    <div className="max-w-[800px] flex grow justify-center items-center flex-col md:flex-row">
      <Calculator />
      <div className="w-full mt-4 md:mt-0 md:ml-4 flex flex-col gap-4">
        <Charts />
        <Tokens />
      </div>
    </div>
  </div>
);

export default Main;
