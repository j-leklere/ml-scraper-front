import React, { useEffect, useState } from "react";
import UrlBar from "../components/UrlBar";
import mainService from "../services/mainService";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import numberFormatter from "../utils/numberFormatter";

const animationProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

const formatKeyFirstLetterOnly = (key) => {
  const formattedKey = key.replace(/([A-Z])/g, " $1");
  return (
    formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1).toLowerCase()
  );
};

export default function Product() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchUrl, setSearchUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (searchUrl) {
        setLoading(true);
        try {
          const res = await mainService.scrapByProductUrl(searchUrl);
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
  }, [searchUrl]);

  return (
    <div className="lateral-padding">
      <div className="product lateral-padding">
        <motion.div {...animationProps}>
          <UrlBar
            onSearch={(searchUrl) => {
              setData(null);
              setSearchUrl(searchUrl);
            }}
          />
        </motion.div>
        {loading && (
          <motion.div className="loading-container" {...animationProps}>
            <p>Cargando resultados...</p>
            <CircularProgress size={24} />
          </motion.div>
        )}
        {data && (
          <motion.div className="product-details" {...animationProps}>
            <h2 className="product-details--name">{data.nombre}</h2>
            <p className="product-details--seller">Vendedor: {data.vendedor}</p>
            <div className="product-details--price">
              {data.precio.precioPrevio != null ? (
                <>
                  <p>
                    Precio sin descuento: {data.precio.moneda}{" "}
                    {numberFormatter(data.precio.precioPrevio)}
                  </p>
                  <p>Descuento: {numberFormatter(data.precio.descuento)}%</p>
                </>
              ) : (
                <p>
                  Precio: {data.precio.moneda}{" "}
                  {numberFormatter(data.precio.precioActual)}
                </p>
              )}
            </div>
            <ul>
              {Object.entries(data.caracteristicas).map(
                ([key, value], index) => (
                  <li key={index}>
                    <strong>{formatKeyFirstLetterOnly(key)}:</strong> {value}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}
