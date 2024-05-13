import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@mui/material";

export default function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      onSearch(searchInput);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchbar">
      <FontAwesomeIcon className="searchbar-icon" icon={faMagnifyingGlass} onClick={handleSearch} />
      <Input
        placeholder="Ingrese su búsqueda"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyPress={handleKeyPress}
        className="searchbar-input"
        fullWidth
      />
    </div>
  );
}
