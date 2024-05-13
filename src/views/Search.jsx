import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import mainService from "../services/mainService";
import Result from "../components/Result";
import { CircularProgress } from "@mui/material";

export default function Search() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        setLoading(true);
        try {
          const res = await mainService.scrapBySearchInput(searchTerm, 3);
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
  }, [searchTerm]);

  return (
    <div className="search">
      <SearchBar
        onSearch={(search) => {
          setData(null);
          setSearchTerm(search);
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
              <h3 className="results-title">Cantidad de Resultados: {data.results.length}</h3>
              <div className="results">
                {data.results.map((element) => (
                  <Result
                    key={element.id}
                    precio={element.price}
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
