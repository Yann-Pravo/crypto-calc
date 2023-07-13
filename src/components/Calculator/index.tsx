import React, { useState } from "react";
import { evaluate } from "mathjs";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("45 + (1250 * 100) / 100");

  return (
    <div className="App">
      <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
          <div className="w-auto mx-3 my-2 h-6 flex justify-between">
            <div className="text-sm">08:57</div>
            <div className="flex items-center text-xs space-x-1">
              <i className="fas fa-signal"></i>
              <i className="fas fa-wifi"></i>
              <i className="fas fa-battery-three-quarters text-sm"></i>
            </div>
          </div>
          <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
            <div className="text-gray-700">{input}</div>
            <div className="text-black font-bold text-3xl">
              {evaluate(input).toFixed(2)}
            </div>
          </div>
          <div className="w-auto m-1 h-auto mb-2">
            <div className="m-2 flex justify-between">
              <div className="bg-yellow-100 shadow-md rounded-2xl w-12 h-12 text-yellow-600 font-medium flex justify-center items-center">
                C
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                (
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                )
              </div>
              <div className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
                /
              </div>
            </div>
            <div className="m-2 flex justify-between">
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                7
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                8
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                9
              </div>
              <div className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
                x
              </div>
            </div>
            <div className="m-2 flex justify-between">
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                4
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                5
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                6
              </div>
              <div className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
                -
              </div>
            </div>
            <div className="m-2 flex justify-between">
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                1
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                2
              </div>
              <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                3
              </div>
              <div className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
                +
              </div>
            </div>
            <div className="m-2 flex justify-between">
              <div className="bg-gray-200 shadow-md rounded-2xl w-full h-12 text-black font-medium flex justify-center items-center">
                0
              </div>
              <div className="flex w-full ml-3 justify-between">
                <div className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
                  .
                </div>
                <div className="bg-green-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
                  =
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
