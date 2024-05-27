import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import mainService from "../services/mainService";
import Result from "../components/Result";
import ArsUsd from "../components/ArsUsd";

import numberFormatter from "../utils/numberFormatter";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

const animationProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

export default function Search() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("ARS");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        setLoading(true);
        try {
          const res = await mainService.scrapBySearchInput(
            searchTerm,
            quantity
          );
          console.log(res.data);
          if (res.status === 200) {
            setData(res.data);
          }
        } catch (error) {
          console.error(error);
          setData(null);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm, quantity]);

  return (
    <div className="lateral-padding">
      <motion.div className="search" {...animationProps}>
        <SearchBar
          onSearch={(search, quantity) => {
            setData(null);
            setSearchTerm(search);
            setQuantity(quantity);
          }}
        />
        {searchTerm &&
          (loading ? (
            <motion.div className="loading-container" {...animationProps}>
              <p>Cargando resultados...</p>
              <CircularProgress size={24} />
            </motion.div>
          ) : (
            data &&
            data.results && (
              <>
                <motion.div className="results-data" {...animationProps}>
                  <ArsUsd
                    onChangeCurrency={handleCurrencyChange}
                    selectedCurrency={selectedCurrency}
                  />
                  <h3 className="results-data--title">
                    Resultados: <span>{data.results.length}</span>
                  </h3>
                  <h3 className="results-data--title">
                    Precio mín.:{" "}
                    <span>
                      $
                      {(selectedCurrency === "ARS" &&
                        numberFormatter(data.ars.minimo)) ||
                        (selectedCurrency === "USD" &&
                          numberFormatter(data.usd.minimo))}
                    </span>
                  </h3>
                  <h3 className="results-data--title">
                    Precio máx.:{" "}
                    <span>
                      $
                      {(selectedCurrency === "ARS" &&
                        numberFormatter(data.ars.maximo)) ||
                        (selectedCurrency === "USD" &&
                          numberFormatter(data.usd.maximo))}
                    </span>
                  </h3>
                  <h3 className="results-data--title">
                    Precio promedio:{" "}
                    <span>
                      $
                      {(selectedCurrency === "ARS" &&
                        numberFormatter(data.ars.promedio)) ||
                        (selectedCurrency === "USD" &&
                          numberFormatter(data.usd.promedio))}
                    </span>
                  </h3>
                </motion.div>
                <motion.div className="results" {...animationProps}>
                  {data.results.map((element) => (
                    <Result
                      key={element.id}
                      precio={
                        (selectedCurrency === "ARS" && element.priceArs) ||
                        (selectedCurrency === "USD" && element.priceUsd)
                      }
                      moneda={element.currency}
                      nombre={element.title}
                      url={element.link}
                      selectedCurrency={selectedCurrency}
                    />
                  ))}
                </motion.div>
              </>
            )
          ))}
      </motion.div>
    </div>
  );
}
