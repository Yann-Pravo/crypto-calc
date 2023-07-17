import React from "react";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => (
  <div
    className={classNames(
      "flex items-center justify-center w-full h-full absolute",
      className
    )}
  >
    <ArrowPathIcon className="absolute w-4 h-4 animate-spin" />
  </div>
);

export default Spinner;
