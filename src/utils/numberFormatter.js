import { NumericFormat } from "react-number-format";

export default function numberFormatter(number) {
  return (
    <NumericFormat
      value={number}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale={false}
      allowLeadingZeros={false}
      allowNegative={true}
    />
  );
}
