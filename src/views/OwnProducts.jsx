import React, { useEffect, useState } from "react";
import UrlBar from "../components/UrlBar";
import mainService from "../services/mainService";
import { motion } from "framer-motion";
import { CircularProgress, IconButton } from "@mui/material";
import { animationProps } from "../utils/animationProps";
import numberFormatter from "../utils/numberFormatter";
import SaveIcon from "@mui/icons-material/Save";
import OwnProduct from "../components/OwnProduct";

const formatKeyFirstLetterOnly = (key) => {
  const formattedKey = key.replace(/([A-Z])/g, " $1");
  return (
    formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1).toLowerCase()
  );
};

export default function OwnProducts() {
  const [data, setData] = useState(null);
  const [scrapedData, setScrapedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchUrl, setSearchUrl] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const scrapProductDetails = async () => {
      if (searchUrl) {
        try {
          const res = await mainService.scrapByProductUrl(searchUrl);
          if (res.data.success === true) {
            setScrapedData(res.data.data);
          }
        } catch (e) {
          console.log(e);
        }
      }
    };
    scrapProductDetails();
  }, [searchUrl]);

  const handleClick = () => {
    console.log("Saved!");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        setLoading(true);
        try {
          const res = await mainService.getOwnProductsByUser(userId);
          if (res.status === 200) {
            setData(res);
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
        {scrapedData && (
          <motion.div className="product-details" {...animationProps}>
            <OwnProduct scrapedData={scrapedData} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
