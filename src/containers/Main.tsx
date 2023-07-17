import React from "react";
import Calculator from "../components/Calculator";
import Charts from "./Charts";

const Main: React.FC = () => (
  <div className="bg-gray-200 w-screen h-screen flex justify-center items-center p-6 flex-col">
    <Calculator />
    <Charts />
  </div>
);

export default Main;
