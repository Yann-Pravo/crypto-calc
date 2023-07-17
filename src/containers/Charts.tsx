import React, { useContext } from "react";
import { ChartContext } from "../contexts/Chart";
import Chart from "../components/Chart";
import dayjs from "dayjs";
import classNames from "classnames";
import Spinner from "../components/Spinner";
import { getCurrencyValue } from "../contexts/Chart/helpers";

const Charts: React.FC = () => {
  const { isLoadingAll, chartData, chartSeries } = useContext(ChartContext);

  const formatters = {
    y: (num: number) =>
      `$${num.toLocaleString("fr-FR", {
        maximumFractionDigits: 1,
        notation: "compact",
      })}`,
    x: (date: string) => dayjs(date).format("DD/MM"),
    tooltip: {
      label: (date: string) => dayjs(date).format("D MMMM YYYY"),
      value: (value: number) => getCurrencyValue(value),
    },
  };

  return (
    <div
      className={classNames(
        "bg-white rounded-2xl shadow-xl border-4 border-gray-100 h-[230px] relative",
        {
          "opacity-50": isLoadingAll || chartData.length === 0,
        }
      )}
    >
      {isLoadingAll && <Spinner />}
      <Chart data={chartData} series={chartSeries} formatters={formatters} />
    </div>
  );
};

export default Charts;
