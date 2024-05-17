import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import mainService from "../services/mainService";
import Result from "../components/Result";
import numberFormatter from "../utils/numberFormatter";
import { CircularProgress } from "@mui/material";

export default function Search() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [quantity, setQuantity] = useState("");

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
    <div className="search">
      <SearchBar
        onSearch={(search, quantity) => {
          setData(null);
          setSearchTerm(search);
          setQuantity(quantity);
        }}
      />
      {searchTerm &&
        (loading ? (
          <div className="loading-container">
            <p>Cargando resultados...</p>
            <CircularProgress size={24} />
          </div>
        ) : (
          data &&
          data.results && (
            <>
              <div className="results-data">
                <h3 className="results-data--title">
                  Cantidad de Resultados: <span>{data.results.length}</span>
                </h3>
                <h3 className="results-data--title">
                  Precio mín.: <span>${numberFormatter(data.minimo)}</span>
                </h3>
                <h3 className="results-data--title">
                  Precio máx.: <span>${numberFormatter(data.maximo)}</span>
                </h3>
                <h3 className="results-data--title">
                  Precio promedio:{" "}
                  <span>${numberFormatter(data.promedio)}</span>
                </h3>
              </div>
              <div className="results">
                {data.results.map((element) => (
                  <Result
                    key={element.id}
                    precio={element.price}
                    moneda={element.currency}
                    nombre={element.title}
                    url={element.link}
                  />
                ))}
              </div>
            </>
          )
        ))}
    </div>
  );
}
