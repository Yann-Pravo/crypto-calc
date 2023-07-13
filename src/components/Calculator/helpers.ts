export const isCoinDisabled = (input: string) => {
  const lastChar = input[input.length - 1];

  if (!lastChar || lastChar === " " || (input.length === 1 && lastChar === "0"))
    return false;

  return (
    [".", ")"].includes(lastChar) ||
    (typeof Number(lastChar) === "number" && !isNaN(Number(lastChar)))
  );
};

export const isOperatorDisabled = (input: string) => {
  const lastChar = input[input.length - 1];

  if (
    !lastChar ||
    (lastChar === " " && input.slice(-2) !== ") ") ||
    (input.length === 1 && lastChar === "0")
  )
    return true;

  return [".", ")"].includes(lastChar) || typeof Number(lastChar) !== "number";
};
