import React, { useContext, useEffect, useState } from "react";
import { evaluate } from "mathjs";
import Button from "./Button";
import { CoinsContext } from "../../contexts/Coins";
import Select from "../Select";
import { COIN } from "../../contexts/Coins/helpers";
import classNames from "classnames";
import Tooltip from "../Tooltip";
import { ChartContext } from "../../contexts/Chart";

const Calculator: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { list, coins, isLoading } = useContext(CoinsContext);
  const { onResultChange } = useContext(ChartContext);
  const [input, setInput] = useState<string>("0");
  const [validResult, setValidResult] = useState<number>(0);

  const onClear = () => {
    setInput("0");
    setValidResult(0);
  };

  const onCalculate = () => {
    try {
      const result = evaluate(
        input
          .split(" ")
          .map((value) => (coins[value] ? coins[value].current_price : value))
          .join("")
      );
      console.log(result);
      setValidResult(result);
    } catch {
      setShowTooltip(true);
      return;
    }
  };

  const onClickValue = (value: string) => {
    if (input === "0") {
      setInput(value);
      return;
    }

    if (
      (typeof Number(value) === "number" && !isNaN(Number(value))) ||
      value === "."
    ) {
      const temp = input + value;
      setInput(temp);
    } else {
      const temp = `${input} ${value} `;
      setInput(temp);
    }
  };

  const onSelectCoin = (coin: COIN) => {
    setOpen(false);
    if (input === "0") {
      setInput(String(coin.id));
      return;
    }

    const temp = `${input}${coin.id}`;
    setInput(temp);
  };

  useEffect(() => {
    onResultChange(input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validResult]);

  return (
    <>
      <Tooltip
        type="error"
        text="Une erreur est survenue"
        subtext="La formule est invalide"
        show={showTooltip}
        setShow={setShowTooltip}
      />
      <div className="w-64 min-w-[256px] h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="w-auto mx-3 my-2 h-6 flex justify-between">
          <div className="flex items-center text-xs space-x-1">
            <i className="fas fa-signal"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-three-quarters text-sm"></i>
          </div>
        </div>
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
          <div className="text-gray-700 flex items-center justify-end">
            {input.split(" ").map((value, index) => (
              <div
                className={classNames("flex items-center justify-end", {
                  "pl-1": index !== 0,
                })}
                key={index}
              >
                {coins[value] ? (
                  <img
                    src={coins[value].image}
                    alt={coins[value].name}
                    width={20}
                    height={20}
                  />
                ) : (
                  value
                )}
              </div>
            ))}
          </div>
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
            <div className="relative">
              <Button onClick={() => setOpen(true)} value="₿" color="orange" />
              <Select
                coins={list}
                isLoading={isLoading}
                open={open}
                setOpen={setOpen}
                onSelect={onSelectCoin}
              />
            </div>
            <Button onClick={onClickValue} value="0" />
            <Button onClick={onClickValue} value="." />
            <Button onClick={onCalculate} value="=" color="green" />
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
