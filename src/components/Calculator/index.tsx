import React, { useState } from "react";
import { evaluate } from "mathjs";
import Button from "./Button";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("0");
  const [validResult, setValidResult] = useState<number>(0);

  const onClear = () => {
    setInput("0");
    setValidResult(0);
  };

  const onCalculate = () => {
    try {
      const result = evaluate(input);
      console.log(result);
      setValidResult(result);
    } catch {
      return;
    }
  };

  const onClickValue = (value: string) => {
    if (input === "0") {
      setInput(value);
      return;
    }

    if (
      (typeof Number(value) && !isNaN(Number(value))) ||
      [".", "(", ")"].includes(value)
    ) {
      const temp = input + value;
      setInput(temp);
    } else {
      const temp = `${input} ${value} `;
      setInput(temp);
    }
  };

  return (
    <div className="App">
      <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
          <div className="w-auto mx-3 my-2 h-6 flex justify-between">
            <div className="flex items-center text-xs space-x-1">
              <i className="fas fa-signal"></i>
              <i className="fas fa-wifi"></i>
              <i className="fas fa-battery-three-quarters text-sm"></i>
            </div>
          </div>
          <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
            <div className="text-gray-700">{input}</div>
            <div className="text-black font-bold text-3xl">
              {validResult.toFixed(2)}
            </div>
          </div>
          <div className="w-auto m-1 h-auto mb-2">
            <div className="m-2 flex justify-between">
              <Button onClick={onClear} value="C" color="yellow" />
              <Button onClick={onClickValue} value="(" />
              <Button onClick={onClickValue} value=")" />
              <Button onClick={onClickValue} value="/" color="orange" />
            </div>
            <div className="m-2 flex justify-between">
              <Button onClick={onClickValue} value="7" />
              <Button onClick={onClickValue} value="8" />
              <Button onClick={onClickValue} value="9" />
              <Button onClick={onClickValue} value="*" color="orange" />
            </div>
            <div className="m-2 flex justify-between">
              <Button onClick={onClickValue} value="4" />
              <Button onClick={onClickValue} value="5" />
              <Button onClick={onClickValue} value="6" />
              <Button onClick={onClickValue} value="-" color="orange" />
            </div>
            <div className="m-2 flex justify-between">
              <Button onClick={onClickValue} value="1" />
              <Button onClick={onClickValue} value="2" />
              <Button onClick={onClickValue} value="3" />
              <Button onClick={onClickValue} value="+" color="orange" />
            </div>
            <div className="m-2 flex justify-between">
              <Button onClick={onClickValue} value="0" className="w-full" />
              <div className="flex w-full ml-3 justify-between">
                <Button onClick={onClickValue} value="." />
                <Button onClick={onCalculate} value="=" color="green" />
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
