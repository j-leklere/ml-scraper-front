import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: "1.2rem",
  },
}));

const SaveSearchIcon = ({ onSave, saved }) => {
  const handleClick = () => {
    onSave();
  };

  return (
    <CustomTooltip
      title={saved ? "Búsqueda guardada" : "Guardar búsqueda"}
      arrow
      placement="left"
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -5],
            },
          },
        ],
      }}
    >
      <span>
        <IconButton
          onClick={handleClick}
          sx={{
            fontSize: "2.8rem",
            color: saved ? "green" : "#555555",
            pointerEvents: saved ? "none" : "auto",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <SaveIcon fontSize="inherit" />
        </IconButton>
      </span>
    </CustomTooltip>
  );
};

export default SaveSearchIcon;
