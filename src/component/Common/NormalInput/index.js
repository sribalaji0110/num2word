import React from "react";
import NumberFormat from "react-number-format";

export const NormalInput = ({
  onChange,
  value = "",
  name,
  prefix,
  className,
}) => {
  return (
    <NumberFormat
      allowEmptyFormatting={true}
      allowNegative={false}
      thousandSeparator={true}
      prefix={prefix ? prefix : "Rs "}
      name={name}
      value={`${value}`}
      onChange={onChange}
      className={className}
    />
  );
};
