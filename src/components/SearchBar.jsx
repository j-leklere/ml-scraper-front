import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const [actualSearchInput, setActualSearchInput] = useState("");
  const [actualQuantityInput, setActualQuantityInput] = useState("");

  const handleSearch = () => {
    if (!searchInput) {
      toast.error("Ingrese búsqueda");
    }
    if (searchInput && !quantityInput) {
      toast.error("Ingrese cantidad de resultados");
    }
    if (
      searchInput.trim() !== "" &&
      quantityInput &&
      (searchInput !== actualSearchInput ||
        quantityInput !== actualQuantityInput)
    ) {
      onSearch(searchInput, quantityInput);
    }
    setActualSearchInput(searchInput);
    setActualQuantityInput(quantityInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="searchbar">
        <Input
          disableUnderline="true"
          placeholder="Ingrese su búsqueda"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyUp={handleKeyPress}
          className="searchbar-input"
          fullWidth
        />
      </div>
      <div className="search-quantity">
        <Input
          disableUnderline="true"
          placeholder="Cantidad"
          type="number"
          value={quantityInput}
          onKeyUp={handleKeyPress}
          onChange={(e) => setQuantityInput(e.target.value)}
          className="searchbar-input searchbar-input_number"
          fullWidth
        />
      </div>
      <div className="searchbar-icon-container" onClick={handleSearch}>
        <FontAwesomeIcon className="searchbar-icon" icon={faMagnifyingGlass} />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
