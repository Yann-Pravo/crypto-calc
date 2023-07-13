import classNames from "classnames";
import React from "react";

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  color?: "grey" | "yellow" | "orange" | "green";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  color = "grey",
  disabled = false,
  className,
}) => (
  <div
    onClick={() => !disabled && onClick(value)}
    className={classNames(
      className,
      "shadow-md rounded-2xl w-12 h-12 font-medium flex justify-center items-center",
      {
        "bg-gray-200 text-black": color === "grey",
        "bg-yellow-100 text-yellow-600": color === "yellow",
        "bg-yellow-500 text-white": color === "orange",
        "bg-green-500 text-white": color === "green",
        "opacity-50": disabled,
      }
    )}
  >
    {value}
  </div>
);

export default Button;
