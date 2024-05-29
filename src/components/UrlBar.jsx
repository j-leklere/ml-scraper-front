import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function UrlBar({ onSearch }) {
  const [productInput, setProductInput] = useState("");
  const [actualProductInput, setActualProductInput] = useState("");

  const handleProduct = () => {
    if (!productInput) {
      toast.error("Ingrese una url");
      return;
    }

    if (!productInput.includes("mercadolibre.com.ar")) {
      toast.error("Ingrese una url válida de MercadoLibre");
      return;
    }

    if (productInput.trim() !== "" && productInput !== actualProductInput) {
      onSearch(encodeURIComponent(productInput));
    }

    setActualProductInput(productInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleProduct();
    }
  };

  return (
    <div className="product-container">
      <div className="productbar">
        <Input
          disableUnderline="true"
          placeholder="Cargue un producto de MercadoLibre ingresando su URL"
          value={productInput}
          onChange={(e) => setProductInput(e.target.value)}
          onKeyUp={handleKeyPress}
          className="productbar-input"
          fullWidth
        />
      </div>
      <div className="productbar-icon-container" onClick={handleProduct}>
        <FontAwesomeIcon className="productbar-icon" icon={faMagnifyingGlass} />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
