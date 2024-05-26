import React from "react";
import argFlag from "../assets/arg-flag.png";
import usaFlag from "../assets/usa-flag.png";

export default function ArsUsd({ onChangeCurrency, selectedCurrency }) {
  const flagWidth = "20";
  const flagHeight = "20";

  const handleClick = (currency) => {
    onChangeCurrency(currency);
  };

  return (
    <div className="currency-picker">
      <div
        className={`currency-picker_ars ${
          selectedCurrency === "ARS" ? "selected" : ""
        }`}
        onClick={() => handleClick("ARS")}
      >
        <h3>ARS</h3>
        <img
          src={argFlag}
          alt="arg flag"
          width={flagWidth}
          height={flagHeight}
        />
      </div>
      <div
        className={`currency-picker_usd ${
          selectedCurrency === "USD" ? "selected" : ""
        }`}
        onClick={() => handleClick("USD")}
      >
        <h3>USD</h3>
        <img
          src={usaFlag}
          alt="usa flag"
          width={flagWidth}
          height={flagHeight}
        />
      </div>
    </div>
  );
}
