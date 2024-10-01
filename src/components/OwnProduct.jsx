import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import numberFormatter from "../utils/numberFormatter";
import { useState } from "react";

export default function OwnProduct({ scrapedData }) {
  const [saved, setSaved] = useState(false);

  const handleSaveProduct = () => {
    console.log("ds");
  };

  return (
    <div className="product-details--container">
      <div>
        <h2 className="product-details--name">{scrapedData.nombre}</h2>
        <p className="product-details--seller">
          Vendedor: {scrapedData.vendedor}
        </p>
        <div className="product-details--price">
          {scrapedData?.precio?.precioPrevio != null ? (
            <>
              <p>
                Precio sin descuento: {scrapedData?.precio?.moneda}{" "}
                {numberFormatter(scrapedData?.precio?.precioPrevio)}
              </p>
              <p>
                Precio con descuento:{" "}
                {numberFormatter(scrapedData.precio.precioActual)}{" "}
                <span>({numberFormatter(scrapedData.precio.descuento)}%)</span>
              </p>
            </>
          ) : (
            <p>
              Precio: {scrapedData?.precio?.moneda}{" "}
              {numberFormatter(scrapedData.precio.precioActual)}
            </p>
          )}
        </div>
      </div>
      <div>
        <IconButton
          onClick={handleSaveProduct}
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
      </div>
    </div>
  );
}
