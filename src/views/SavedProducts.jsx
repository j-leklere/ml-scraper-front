import React, { useEffect, useState } from "react";
import mainService from "../services/mainService";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import numberFormatter from "../utils/numberFormatter";
import { animationProps } from "../utils/animationProps";
import SavedProduct from "../components/SavedProduct";

export default function SavedProducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        setLoading(true);
        try {
          const res = await mainService.getSavedProductsByUser(userId);
          if (res.status === 200) {
            setData(res.data.data);
          }
        } catch (error) {
          console.error(error);
          setData(null);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="saved-products lateral-padding">
      <div className="products lateral-padding">
        {loading && (
          <motion.div className="loading-container" {...animationProps}>
            <p>Cargando resultados...</p>
            <CircularProgress size={24} />
          </motion.div>
        )}
        {data && (
          <motion.div className="saved-products-list" {...animationProps}>
            {data.map((search) => (
              <SavedProduct
                key={search.id}
                id={search.id}
                name={search.name}
                url={search.url}
                image_url={search.image_url}
                price_ars={search.price_ars}
                price_usd={search.price_usd}
                discount={search.discount}
                currency={search.currency}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
