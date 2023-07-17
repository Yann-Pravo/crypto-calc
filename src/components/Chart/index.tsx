import React from "react";
import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CHART_SERIE } from "../../contexts/Chart/helpers";
import CustomTooltip from "./Tooltip";

export interface ChartProps {
  data: { [key: string]: number | string | boolean | undefined }[];
  series: CHART_SERIE[];
  formatters?: {
    x?: (x: any) => void;
    y?: (y: any) => void;
    tooltip?: {
      label?: (label: string) => void;
      value?: (label: number) => void;
    };
  };
}

const Chart: React.FC<ChartProps> = ({
  data,
  series = [],
  formatters = {},
}) => (
  <ResponsiveContainer height="100%">
    <LineChart data={data}>
      <Tooltip
        content={
          <CustomTooltip formatters={formatters.tooltip} series={series} />
        }
        cursor={false}
      />
      <CartesianGrid stroke="#D9D9E3" strokeDasharray="3 3" vertical={false} />
      <XAxis
        dataKey="date"
        axisLine={false}
        tickLine={false}
        tick={{
          fontWeight: 400,
          fontSize: "12px",
        }}
        tickFormatter={(tick) => (formatters.x ? formatters.x(tick) : tick)}
      />
      <YAxis
        tickCount={3}
        axisLine={false}
        tickLine={false}
        tick={{
          fontSize: "12px",
        }}
        tickFormatter={(tick) => (formatters.y ? formatters.y(tick) : tick)}
      />
      {series.map(({ id, color }) => (
        <Line key={id} dataKey={id} stroke={color} />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
