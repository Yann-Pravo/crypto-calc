import React from "react";
import { CHART_SERIE } from "../../contexts/Chart/helpers";

interface CustomTooltipProps {
  payload?: { name: string; value: number; color: string }[];
  label?: string;
  formatters?: {
    label?: (label: string) => void;
    value?: (value: number) => void;
  };
  series: CHART_SERIE[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  payload,
  label = "",
  formatters,
  series,
}) => {
  if (payload && payload.length) {
    return (
      <div className="py-2 px-3 items-center gap-2 bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="text-gray-400 mb-2">
          {formatters?.label?.(label) || label}
        </div>
        {payload.map(({ value, color, name }) => (
          <div className="flex items-center" key={name}>
            <div style={{ color }}>
              {series.find(({ id }) => id === name)?.name || name}:
            </div>
            <div className="ml-2">{formatters?.value?.(value) || value}</div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
