import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");

  const handleSearch = () => {
    if (!quantityInput) {
      toast.error("Ingrese cantidad de resultados");
    }
    if (searchInput.trim() !== "" && quantityInput) {
      onSearch(searchInput, quantityInput);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="searchbar">
        <FontAwesomeIcon
          className="searchbar-icon"
          icon={faMagnifyingGlass}
          onClick={handleSearch}
        />
        <Input
          placeholder="Ingrese su búsqueda"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyUp={handleKeyPress}
          className="searchbar-input"
          fullWidth
        />
      </div>
      <div className="search-quantity">
        <FontAwesomeIcon
          className="searchbar-icon"
          icon={faMagnifyingGlass}
          onClick={handleSearch}
        />
        <Input
          placeholder="Cantidad de resultados"
          type="number"
          value={quantityInput}
          onKeyUp={handleKeyPress}
          onChange={(e) => setQuantityInput(e.target.value)}
          className="searchbar-input"
          fullWidth
        />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
