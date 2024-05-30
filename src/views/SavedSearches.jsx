import React, { useEffect, useState } from "react";
import mainService from "../services/mainService";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import SavedSearch from "../components/SavedSearch";
import { animationProps } from "../utils/animationProps";

export default function SavedSearches() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        setLoading(true);
        try {
          const res = await mainService.getSavedSearchesByUser(userId);
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
    <div className="saved-searches lateral-padding">
      <div className="saved-searches-container lateral-padding">
        {loading && (
          <motion.div className="loading-container" {...animationProps}>
            <p>Cargando búsquedas guardadas...</p>
            <CircularProgress size={24} />
          </motion.div>
        )}
        {data && (
          <motion.div className="saved-searches-list" {...animationProps}>
            {data.map((search) => (
              <SavedSearch
                key={search.id}
                id={search.id}
                name={search.name}
                term={search.term}
                quantity={search.results}
                lastTimeSearched={search.last_searched_at}
                comparisonProduct={search.product ? search.product.name : null}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
