import React, { useState } from "react";
import { Chip, Box, IconButton } from "@mui/material";
import { color, motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { animationProps } from "../utils/animationProps";

export default function SavedSearchesList({ savedSearches, onSearchSelect }) {
  const scrollContainerRef = React.useRef(null);
  const [selectedSearchId, setSelectedSearchId] = useState(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleChipClick = (search) => {
    setSelectedSearchId(search.id);
    onSearchSelect(search);
  };

  return (
    <motion.div className="saves-searches-list" {...animationProps}>
      <IconButton
        className="navigation-button"
        onClick={handleScrollLeft}
        aria-label="scroll left"
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        className="saves-searches-list-box"
        ref={scrollContainerRef}
        sx={{ display: "flex", flexWrap: "nowrap", gap: 1, overflowX: "auto" }}
      >
        {savedSearches.map((search) => (
          <Chip
            className="saves-searches-list-box--chip"
            key={search.id}
            label={search.name}
            onClick={() => handleChipClick(search)}
            clickable
            sx={{
              borderRadius: "7.5px",
              color: "#fcfcfc",
              backgroundColor:
                selectedSearchId === search.id ? "#228be6" : "#91c5f3",
              // color: selectedSearchId === search.id ? "white" : "black",
              "&:hover": {
                backgroundColor:
                  selectedSearchId === search.id ? "#228be6" : "#228be6",
              },
            }}
          />
        ))}
      </Box>
      <IconButton
        className="navigation-button"
        onClick={handleScrollRight}
        aria-label="scroll right"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </motion.div>
  );
}
