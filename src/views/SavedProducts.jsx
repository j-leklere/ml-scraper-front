import React, { useEffect, useState } from "react";
import mainService from "../services/mainService";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import { animationProps } from "../utils/animationProps";
import SavedProduct from "../components/SavedProduct";
import { useQuery } from "@tanstack/react-query";

export default function SavedProducts() {
  const [data, setData] = useState(null);
  const userId = localStorage.getItem("userId");

  const { data: queryData, isLoading } = useQuery({
    queryKey: ["savedProducts", userId],
    queryFn: () => mainService.getSavedProductsByUser(userId),
    enabled: !!userId,
    onSuccess: (res) => {
      setData(res.data.data);
    },
    onError: () => {
      setData(null);
    },
  });

  return (
    <div className="saved-products lateral-padding">
      <div className="products lateral-padding">
        {isLoading && (
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
